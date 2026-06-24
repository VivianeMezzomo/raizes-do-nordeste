import CreateOrderUseCase from "../../application/useCases/orders/CreateOrderUseCase.js";
import GetOrderStatusUseCase from "../../application/useCases/orders/GetOrderStatusUseCase.js";
import OrderChannel from "../../domain/enum/OrderChannel.js";

class OrderController {
  async create(req, res) {
    try {
      const { orderChannel, items } = req.body;
      if (
        !orderChannel ||
        !Array.isArray(items) ||
        items.length === 0 ||
        items.some((item) => !item.productId || !item.quantity)
      ) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message:
            "O canal de atendimento e pelo menos um produto são obrigatórios.",
        });
      }

      if (!Object.values(OrderChannel).includes(orderChannel)) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Canal de atendimento inválido.",
        });
      }

      const useCase = new CreateOrderUseCase();

      const order = await useCase.execute({
        userId: req.user.id,
        orderChannel: req.body.orderChannel,
        items: req.body.items,
      });

      return res.status(201).json(order);
    } catch (error) {
      if (error.message === "ID_INVALIDO") {
        return res.status(400).json({
          error: "ID_INVALIDO",
          message: "O Id deve possuir 24 caracteres.",
        });
      }
      if (error.message === "PRODUTO_NAO_ENCONTRADO") {
        return res.status(400).json({
          error: "PRODUTO_NÃO_ENCONTRADO",
          message: "Produto não encontrado",
        });
      }
      if (error.message === "ESTOQUE_INSUFICIENTE") {
        return res.status(400).json({
          error: "ESTOQUE_INSUFICIENTE",
          message: "Estoque insuficiente",
        });
      }
      return res.status(400).json({
        error: "ERRO_INTERNO",
        message: "Erro interno",
      });
    }
  }

  async getStatus(req, res) {
    try {
      const { id } = req.params;

      const useCase = new GetOrderStatusUseCase();
      const order = await useCase.execute(id);

      if (
        req.user.role !== "ADMIN" &&
        order.userId.toString() !== req.user.id
      ) {
        throw new Error("ACESSO_NEGADO");
      }

      return res.status(200).json(order);
    } catch (error) {
      if (error.message === "PEDIDO_NAO_ENCONTRADO") {
        return res.status(404).json({
          error: "PEDIDO_NAO_ENCONTRADO",
          message: "Pedido não encontrado.",
        });
      }

      if (error.message === "ID_INVALIDO") {
        return res.status(404).json({
          error: "ID_INVALIDO",
          message: "Id inválido.",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        message: "Erro interno.",
      });
    }
  }
}

export default new OrderController();
