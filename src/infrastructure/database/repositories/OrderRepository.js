import PagamentoModel from "../models/PagamentoModel.js";
import PedidoModel from "../models/PedidoModel.js";

class OrderRepository {
  async create(orderData) {
    return PedidoModel.create(orderData);
  }

  async findById(id) {
    return PedidoModel.findById(id);
  }

  async updateStatus(id, status) {
    return PagamentoModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}

export default new OrderRepository();
