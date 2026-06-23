import RegisterPaymentUseCase from "../../application/useCases/payments/RegisterPaymentUseCase.js";
import PaymentStatus from "../../domain/enum/PaymentStatus.js";

class PaymentController {
  async create(req, res) {
    try {
      const { orderId, result } = req.body;
      if (!orderId || !result) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message:
            "O id do produto e o resultado do pagamento são obrigatórios.",
        });
      }

      if (!Object.values(PaymentStatus).includes(result)) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Resultado do pagamento inválido.",
        });
      }

      if (orderId.length != 24) {
        return res.status(400).json({
          error: "ID_INVALIDO",
          message: "O Id deve possuir 24 caracteres.",
        });
      }

      const useCase = new RegisterPaymentUseCase();

      const payment = await useCase.execute({
        orderId: req.body.orderId,
        result: req.body.result,
      });

      return res.status(201).json(payment);
    } catch (error) {
      if (error.message === "PEDIDO_NAO_ENCONTRADO") {
        return res.status(400).json({
          error: "PEDIDO_NAO_ENCONTRADO",
          message: "Pedido não encontrado",
        });
      }
      if (error.message === "PEDIDO_JA_PROCESSADO") {
        return res.status(400).json({
          error: "PEDIDO_JA_PROCESSADO",
          message: "Pedido já processado",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        maessage: "Erro interno.",
      });
    }
  }
}

export default new PaymentController();
