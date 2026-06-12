import { PerfilUsuario } from "../enum/PerfilUsuario";

class User {
  constructor({ id, nome, email, senha, perfil = PerfilUsuario.CLIENTE }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.perfil = perfil;
  }

  isAdmin() {
    return this.perfil === PerfilUsuario.ADMIN;
  }

  isGerente() {
    return this.perfil === PerfilUsuario.GERENTE;
  }

  isCozinha() {
    return this.perfil === PerfilUsuario.COZINHA;
  }

  podeAlterarStatusPedido() {
    return [
      PerfilUsuario.COZINHA,
      PerfilUsuario.GERENTE,
      PerfilUsuario.ADMIN,
    ].includes(this.perfil);
  }
}

export default User;
