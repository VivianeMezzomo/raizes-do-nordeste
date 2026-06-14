import LoginUseCase from "../../application/useCases/auth/LoginUseCase.js";
import RegisterUseCase from "../../application/useCases/auth/RegisterUseCase.js";

class AuthController {
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Nome, email e senha são obrigatórios.",
        });
      }

      const registerUseCase = new RegisterUseCase();

      const usuario = await registerUseCase.execute({
        nome,
        email,
        senha,
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
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({
          error: "DADOS_INVALIDOS",
          message: "Email e senha são obrigatórios.",
        });
      }

      const loginUseCase = new LoginUseCase();

      const resultado = await loginUseCase.execute(email, senha);

      return res.status(200).json(resultado);
    } catch (error) {
      console.log("error.message", error.message);
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
