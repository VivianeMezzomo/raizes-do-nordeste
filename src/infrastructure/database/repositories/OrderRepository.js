import PaymentModel from "../models/PaymentModel.js";
import OrderModel from "../models/OrderModel.js";

class OrderRepository {
  async create(orderData) {
    return OrderModel.create(orderData);
  }

  async findById(id) {
    return OrderModel.findById(id);
  }

  async updateStatus(id, status) {
    return PaymentModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}

export default new OrderRepository();
