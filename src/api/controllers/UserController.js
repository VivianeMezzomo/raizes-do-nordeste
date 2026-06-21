import UpdateRoleUseCase from "../../application/useCases/users/UpdateRoleUseCase.js";

class UserController {
  async UpdateRole(req, res) {
    const { id } = req.params;
    const { role } = req.body;

    const useCase = new UpdateRoleUseCase();

    const user = await useCase.execute(id, role);

    return res.json(user);
  }
}

export default new UserController();
