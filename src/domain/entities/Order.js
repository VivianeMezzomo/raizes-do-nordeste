import OrderStatus from "../enum/OrderStatus.js";
import orderChannel from "../enum/OrderChannel.js";

class Order {
  constructor({ userId, unidadeId, orderChannel, items }) {
    if (!Object.values(orderChannel).includes(orderChannel)) {
      throw new Error("Canal de pedido inválido");
    }

    this.userId = userId;
    this.unitId = unitId;
    this.orderChannel = orderChannel;
    this.items = items;

    this.status = OrderStatus.AGUARDANDO_PAGAMENTO;
    this.total = 0;
  }

  calculateTotalOrder() {}

  approvePayment() {
    this.status = OrderStatus.COZINHA;
  }

  deliverOrder() {
    this.status = OrderStatus.ENTREGUE;
  }

  cancelOrder() {
    this.status = OrderStatus.CANCELADO;
  }
}

export default Order;
