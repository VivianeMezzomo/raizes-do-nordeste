import mongoose from "mongoose";
import PerfilUsuario from "../../../domain/enum/PerfilUsuario.js";

const userSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senhaHash: {
      type: String,
      required: true,
    },
    perfil: {
      type: String,
      enum: PerfilUsuario,
      default: PerfilUsuario.CLIENTE,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
