import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";

class GetOrderStatusUseCase {
  async execute(orderId) {
    const order = await OrderRepository.findById(orderId);

    if (!order) {
      throw new Error("ORDER_NOT_FOUND");
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
