import PedidoStatus from "../enum/PedidoStatus";
import CanalPedido from "../enum/CanalPedido";

class Pedido {
  constructor({ clienteId, unidadeId, canalPedido, itens }) {
    if (!Object.values(CanalPedido).includes(canalPedido)) {
      throw new Error("Canal de pedido inválido");
    }

    this.clienteId = clienteId;
    this.UnidadeId = unidadeId;
    this.CanalPedido = CanalPedido;
    this.itens = itens;

    this.status = PedidoStatus.AGUARDANDO_PAGAMENTO;
    this.total = 0;
  }

  calcularTotaldoPedido() {}

  aprovarPagamento() {
    this.status = PedidoStatus.COZINHA;
  }

  entregarPedido() {
    this.status = PedidoStatus.ENTREGUE;
  }

  cancelarPedido() {
    this.status = PedidoStatus.CANCELADO;
  }
}

export default Pedido;
