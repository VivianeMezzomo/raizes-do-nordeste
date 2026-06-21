import RegisterPaymentUseCase from "../../application/useCases/payments/RegisterPaymentUseCase.js";

class PaymentController {
  async create(req, res) {
    try {
      const useCase = new RegisterPaymentUseCase();

      const payment = await useCase.execute({
        orderId: req.body.orderId,
        result: req.body.result,
      });

      return res.status(201).json(payment);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new PaymentController();
