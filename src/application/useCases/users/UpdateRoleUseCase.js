import UserRepository from "../../../infrastructure/database/repositories/UserRepository.js";

class UpdateRoleUseCase {
  async execute(userId, role) {
    const user = await UserRepository.findById(userId);

    if (!user) {
      throw new Error("USUARIO_NAO_ENCONTRADO");
    }

    user.role = role;

    await user.save();

    return user;
  }
}

export default UpdateRoleUseCase;
