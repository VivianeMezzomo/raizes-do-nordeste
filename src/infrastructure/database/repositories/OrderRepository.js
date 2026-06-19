import PedidoModel from "../models/PedidoModel.js";

class OrderRepository {
  async create(orderData) {
    return PedidoModel.create(orderData);
  }

  async findById(id) {
    return PedidoModel.findById(id);
  }
}

export default new OrderRepository();
