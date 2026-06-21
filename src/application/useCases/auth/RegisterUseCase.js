import bcrypt from "bcrypt";

import UserRepository from "../../../infrastructure/database/repositories/UserRepository.js";

class RegisterUseCase {
  async execute({ name, email, password, role = "CLIENTE" }) {
    const usuarioExistente = await UserRepository.findByEmail(email);

    if (usuarioExistente) {
      throw new Error("EMAIL_JA_CADASTRADO");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const novoUsuario = await UserRepository.create({
      name,
      email,
      passwordHash,
      role,
    });

    return {
      id: novoUsuario._id,
      name: novoUsuario.name,
      email: novoUsuario.email,
      role: novoUsuario.role,
    };
  }
}

export default RegisterUseCase;
