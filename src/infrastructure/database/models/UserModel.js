import mongoose from "mongoose";
import UserRole from "../../../domain/enum/UserRole.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.CLIENTE,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
