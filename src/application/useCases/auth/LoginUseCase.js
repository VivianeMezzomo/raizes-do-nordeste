import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../../infrastructure/database/models/UserModel.js";

class LoginUseCase {
  async execute(email, senha) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("CREDENCIAIS_INVALIDAS");
    }

    const senhaValida = await bcrypt.compare(senha, user.senhaHash);

    if (!senhaValida) {
      throw new Error("CREDENCIAIS_INVALIDAS");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        perfil: user.perfil,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    return {
      accessToken,
      tokenType: "Bearer",
      expiresIn: 3600,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}

export default LoginUseCase;
