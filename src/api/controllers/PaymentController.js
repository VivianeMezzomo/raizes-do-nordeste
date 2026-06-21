import RegisterPaymentUseCase from "../../application/useCases/payments/RegisterPaymentUseCase.js";

class PaymentController {
  async create(req, res) {
    try {
      const useCase = new RegisterPaymentUseCase();

      const pagamento = await useCase.execute({
        pedidoId: req.body.pedidoId,
        resultado: req.body.resultado,
      });

      return res.status(201).json(pagamento);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new PaymentController();
