import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";
import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";

class CreateOrderUseCase {
  async execute({ userId, orderChannel, items }) {
    let totalPrice = 0;

    const orderItems = [];

    for (const item of items) {
      const product = await ProductRepository.findById(item.productId);

      if (!product) {
        throw new Error("PRODUTO_NAO_ENCONTRADO");
      }

      if (product.stock < item.quantity) {
        throw new Error("ESTOQUE_INSUFICIENTE");
      }

      totalPrice += product.price * item.quantity;

      orderItems.push({
        productId: product._id,
        quantity: item.quantity,
        unitPrice: product.price,
      });

      product.stock -= item.quantity;

      await product.save();
    }

    return OrderRepository.create({
      userId,
      orderChannel,
      items: orderItems,
      totalPrice,
      status: "PENDENTE",
    });
  }
}

export default CreateOrderUseCase;
