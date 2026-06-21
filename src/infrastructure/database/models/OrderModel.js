import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderChannel: {
      type: String,
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: Number,

        unitPrice: Number,
      },
    ],

    totalPrice: Number,

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
