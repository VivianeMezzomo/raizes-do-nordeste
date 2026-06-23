import UpdateRoleUseCase from "../../application/useCases/users/UpdateRoleUseCase.js";
import UserRole from "../../domain/enum/UserRole.js";

class UserController {
  async UpdateRole(req, res) {
    try {
      const { id } = req.params;
      const { role } = req.body;

      if (!id || !role) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Id e perfil do usuário são obrigatórios.",
        });
      }

      if (id.length != 24) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "O Id deve possuir 24 caracteres.",
        });
      }

      if (!Object.values(UserRole).includes(role)) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Perfil inválido.",
        });
      }

      const useCase = new UpdateRoleUseCase();

      const user = await useCase.execute(id, role);

      return res.json(user);
    } catch (error) {
      if (error.message === "USUARIO_NAO_ENCONTRADO") {
        return res.status(400).json({
          error: "USUARIO_NAO_ENCONTRADO",
          message: "Usuário não encontrado.",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        message: "Erro interno do servidor.",
      });
    }
  }
}

export default new UserController();
