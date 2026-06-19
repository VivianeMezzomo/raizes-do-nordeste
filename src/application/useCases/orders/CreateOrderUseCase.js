import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";
import OrderRepository from "../../../infrastructure/database/repositories/OrderRepository.js";

class CreateOrderUseCase {
  async execute({ usuarioId, canalPedido, itens }) {
    let valorTotal = 0;

    const itensPedido = [];

    for (const item of itens) {
      const produto = await ProductRepository.findById(item.produtoId);

      if (!produto) {
        throw new Error("PRODUTO_NAO_ENCONTRADO");
      }

      if (produto.estoque < item.quantidade) {
        throw new Error("ESTOQUE_INSUFICIENTE");
      }

      valorTotal += produto.preco * item.quantidade;

      itensPedido.push({
        produtoId: produto._id,
        quantidade: item.quantidade,
        precoUnitario: produto.preco,
      });

      produto.estoque -= item.quantidade;

      await produto.save();
    }

    return OrderRepository.create({
      usuarioId,
      canalPedido,
      itens: itensPedido,
      valorTotal,
      status: "PENDENTE",
    });
  }
}

export default CreateOrderUseCase;
