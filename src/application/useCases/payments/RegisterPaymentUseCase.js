import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";
import PaymentRepository from "../../../infrastructure/database/repositories/PaymentRepository.js";
import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";

class RegisterPaymentUseCase {
  async execute({ orderId, result }) {
    const order = await OrderRepository.findById(orderId);

    if (!order) {
      throw new Error("PEDIDO_NAO_ENCONTRADO");
    }

    if (order.status === "PAGO" || order.status === "CANCELADO") {
      throw new Error("PEDIDO_JA_PROCESSADO");
    }

    const payment = await PaymentRepository.create({
      orderId,
      price: order.totalPrice,
      status: result,
    });

    if (result === "APROVADO") {
      await OrderRepository.updateStatus(orderId, "PAGO");
    } else {
      for (const item of order.items) {
        await ProductRepository.increaseStock(item.productId, item.quantity);
      }

      await OrderRepository.updateStatus(orderId, "CANCELADO");
    }

    return payment;
  }
}

export default RegisterPaymentUseCase;
