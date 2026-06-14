import AtualizarPerfilUseCase from "../../application/useCases/users/AtualizarPerfilUseCase.js";

class UserController {
  async atualizarPerfil(req, res) {
    const { id } = req.params;
    const { perfil } = req.body;

    const useCase = new AtualizarPerfilUseCase();

    const usuario = await useCase.execute(id, perfil);

    return res.json(usuario);
  }
}

export default new UserController();
