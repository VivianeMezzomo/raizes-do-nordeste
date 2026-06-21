import CreateOrderUseCase from "../../application/useCases/orders/CreateOrderUseCase.js";
import GetOrderStatusUseCase from "../../application/useCases/orders/GetOrderStatusUseCase.js";

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

  async getStatus(req, res) {
    try {
      const { id } = req.params;

      if (
        req.user.role !== "ADMIN" &&
        order.userId.toString() !== req.user.id
      ) {
        throw new Error("ACCESS_DENIED");
      }

      const useCase = new GetOrderStatusUseCase();

      const order = await useCase.execute(id);

      return res.status(200).json(order);
    } catch (error) {
      if (error.message === "ORDER_NOT_FOUND") {
        return res.status(404).json({
          error: "ORDER_NOT_FOUND",
          message: "Pedido não encontrado.",
        });
      }

      return res.status(500).json({
        error: "INTERNAL_SERVER_ERROR",
        message: "Erro interno do servidor.",
      });
    }
  }
}

export default new OrderController();
