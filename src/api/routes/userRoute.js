import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import UserController from "../controllers/UserController.js";

const router = Router();
/**
 * @swagger
 * /users/:id/perfil:
 *   patch:
 *     summary: Atualiza o perfil de um usuário já existente
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro realizado com sucesso
 */
router.patch(
  "/:id/perfil",
  authMiddleware,
  authorize("ADMIN"),
  UserController.atualizarPerfil,
);

export default router;
