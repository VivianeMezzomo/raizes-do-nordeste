import CreateOrderUseCase from "../../application/useCases/orders/CreateOrderUseCase.js";

class OrderController {
  async create(req, res) {
    try {
      const useCase = new CreateOrderUseCase();

      const order = await useCase.execute({
        userId: req.user.id,
        orderChannel: req.body.orderChannel,
        items: req.body.items,
      });

      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new OrderController();
