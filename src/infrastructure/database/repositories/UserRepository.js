import UserModel from "../models/UserModel.js";

class UserRepository {
  async findByEmail(email) {
    return UserModel.findOne({ email });
  }

  async findById(id) {
    return UserModel.findById(id);
  }

  async create(userData) {
    return UserModel.create(userData);
  }
}

export default new UserRepository();
