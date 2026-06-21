import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";
import PaymentRepository from "../../../infrastructure/database/repositories/PagamentoRepository.js";

class RegisterPaymentUseCase {
  async execute({ pedidoId, resultado }) {
    const pedido = await OrderRepository.findById(pedidoId);

    if (!pedido) {
      throw new Error("PEDIDO_NAO_ENCONTRADO");
    }

    const pagamento = await PaymentRepository.create({
      pedidoId,
      valor: pedido.valorTotal,
      status: resultado,
    });

    if (resultado === "APROVADO") {
      await OrderRepository.updateStatus(pedidoId, "PAGO");
    } else {
      await OrderRepository.updateStatus(pedidoId, "CANCELADO");
    }

    return pagamento;
  }
}

export default RegisterPaymentUseCase;
