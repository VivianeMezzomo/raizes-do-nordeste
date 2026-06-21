import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../../infrastructure/database/models/UserModel.js";

class LoginUseCase {
  async execute(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("CREDENCIAIS_INVALIDAS");
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);

    if (!validPassword) {
      throw new Error("CREDENCIAIS_INVALIDAS");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        role: user.role,
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
