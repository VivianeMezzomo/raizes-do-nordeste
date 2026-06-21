import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";
import PaymentRepository from "../../../infrastructure/database/repositories/PaymentRepository.js";

class RegisterPaymentUseCase {
  async execute({ orderId, result }) {
    const order = await OrderRepository.findById(orderId);

    if (!order) {
      throw new Error("PEDIDO_NAO_ENCONTRADO");
    }

    const payment = await PaymentRepository.create({
      orderId,
      valor: pedido.valorTotal,
      status: result,
    });

    if (result === "APROVADO") {
      await OrderRepository.updateStatus(orderId, "PAGO");
    } else {
      await OrderRepository.updateStatus(orderId, "CANCELADO");
    }

    return payment;
  }
}

export default RegisterPaymentUseCase;
