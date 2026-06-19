import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    canalPedido: {
      type: String,
      required: true,
    },

    itens: [
      {
        produtoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        quantidade: Number,

        precoUnitario: Number,
      },
    ],

    valorTotal: Number,

    status: {
      type: String,
      default: "PENDENTE",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
