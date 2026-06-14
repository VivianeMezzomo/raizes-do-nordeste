import bcrypt from "bcrypt";

import UserRepository from "../../../infrastructure/database/repositories/UserRepository.js";

class RegisterUseCase {
  async execute({ nome, email, senha, perfil = "CLIENTE" }) {
    const usuarioExistente = await UserRepository.findByEmail(email);

    if (usuarioExistente) {
      throw new Error("EMAIL_JA_CADASTRADO");
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await UserRepository.create({
      nome,
      email,
      senhaHash,
      perfil,
    });

    return {
      id: novoUsuario._id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      perfil: novoUsuario.perfil,
    };
  }
}

export default RegisterUseCase;
