import PaymentModel from "../models/PagamentoModel.js";

class PaymentRepository {
  async create(data) {
    return PaymentModel.create(data);
  }

  async findAll() {
    return PaymentModel.find();
  }
}

export default new PaymentRepository();
