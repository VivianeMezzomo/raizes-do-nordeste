import UserRepository from "../../../infrastructure/database/repositories/UserRepository.js";

class AtualizarPerfilUseCase {
  async execute(userId, perfil) {
    const usuario = await UserRepository.findById(userId);

    if (!usuario) {
      throw new Error("USUARIO_NAO_ENCONTRADO");
    }

    usuario.perfil = perfil;

    await usuario.save();

    return usuario;
  }
}

export default AtualizarPerfilUseCase;
