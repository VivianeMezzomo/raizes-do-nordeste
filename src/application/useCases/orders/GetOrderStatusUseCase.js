import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";

class GetOrderStatusUseCase {
  async execute(orderId) {
    if (orderId.length != 24) {
      throw new Error("ID_INVALIDO");
    }

    const order = await OrderRepository.findById(orderId);

    if (!order) {
      throw new Error("PEDIDO_NAO_ENCONTRADO");
    }

    return {
      id: order._id,
      status: order.status,
      totalPrice: order.totalPrice,
      orderChannel: order.orderChannel,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    };
  }
}

export default GetOrderStatusUseCase;
