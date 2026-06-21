import { UserRole } from "../enum/UserRole.js";

class User {
  constructor({ id, name, email, password, role = UserRole.CLIENTE }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  isAdmin() {
    return this.role === UserRole.ADMIN;
  }

  isGerente() {
    return this.role === UserRole.GERENTE;
  }

  isCozinha() {
    return this.role === UserRole.COZINHA;
  }

  canUpdateOrderStatus() {
    return [UserRole.COZINHA, UserRole.GERENTE, UserRole.ADMIN].includes(
      this.role,
    );
  }
}

export default User;
