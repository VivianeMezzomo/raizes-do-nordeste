import CreateOrderUseCase from "../../application/useCases/orders/CreateOrderUseCase.js";

class OrderController {
  async create(req, res) {
    try {
      const useCase = new CreateOrderUseCase();

      const pedido = await useCase.execute({
        usuarioId: req.user.id,
        canalPedido: req.body.canalPedido,
        itens: req.body.itens,
      });

      return res.status(201).json(pedido);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new OrderController();
