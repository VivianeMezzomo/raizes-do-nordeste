import OrderModel from "../models/OrderModel.js";

class OrderRepository {
  async create(orderData) {
    return OrderModel.create(orderData);
  }

  async findById(id) {
    return OrderModel.findById(id)
      .populate("userId", "name email")
      .populate("items.productId", "name");
  }

  async updateStatus(id, status) {
    return OrderModel.findByIdAndUpdate(
      id,
      { status },
      {
        returnDocument: "after",
      },
    );
  }
}

export default new OrderRepository();
