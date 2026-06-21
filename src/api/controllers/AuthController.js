import LoginUseCase from "../../application/useCases/auth/LoginUseCase.js";
import RegisterUseCase from "../../application/useCases/auth/RegisterUseCase.js";

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Nome, email e senha são obrigatórios.",
        });
      }

      if (name.trim().length < 3) {
        return res.status(400).json({
          error: "NOME_INVALIDO",
          message: "O nome deve possuir pelo menos 3 caracteres.",
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: "EMAIL_INVALIDO",
          message: "Formato de e-mail inválido.",
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          error: "SENHA_INVALIDA",
          message: "A senha deve possuir pelo menos 6 caracteres.",
        });
      }

      const registerUseCase = new RegisterUseCase();

      const usuario = await registerUseCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).json(usuario);
    } catch (error) {
      if (error.message === "EMAIL_JA_CADASTRADO") {
        return res.status(409).json({
          error: "EMAIL_JA_CADASTRADO",
          message: "Já existe um usuário com este e-mail.",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        message: "Erro interno do servidor.",
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Email e senha são obrigatórios.",
        });
      }

      const loginUseCase = new LoginUseCase();

      const resultado = await loginUseCase.execute(email, password);

      return res.status(200).json(resultado);
    } catch (error) {
      if (error.message === "CREDENCIAIS_INVALIDAS") {
        return res.status(401).json({
          error: "CREDENCIAIS_INVALIDAS",
          message: "Email ou senha inválidos.",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        message: "Erro interno do servidor.",
      });
    }
  }
}

export default new AuthController();
