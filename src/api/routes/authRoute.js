import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Realiza o registro de um novo usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 required: true
 *                 description: Email do usuário.
 *               password:
 *                 type: string
 *                 required: true
 *                 description: Senha do usuário.
 *     responses:
 *       200:
 *         description: Registro realizado com sucesso
 *       400:
 *          description: Erro ao realizar o registro.
 *       500:
 *          description: Erro interno no servidor.
 */
router.post("/register", AuthController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *                 description: Email do usuário.
 *               password:
 *                 type: string
 *                 required: true
 *                 description: Senha do usuário.
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *          description: Erro ao realizar o login.
 *       500:
 *          description: Erro interno no servidor.
 */
router.post("/login", AuthController.login);

export default router;
