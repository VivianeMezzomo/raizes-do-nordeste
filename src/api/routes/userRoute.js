import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import UserController from "../controllers/UserController.js";

const router = Router();
/**
 * @swagger
 * /users/{id}/role:
 *   patch:
 *     summary: Atualiza o perfil de um usuário já existente
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - role
 *             properties:
 *               role:
 *                 type: string
 *                 description: Novo perfil do usuário (CLIENTE, ATENDENTE, COZINHA, GERENTE, ADMIN).
 *     responses:
 *       200:
 *         description: Perfil atualizado com sucesso
 *       400:
 *          description: Erro ao atualizar o perfil.
 *       500:
 *          description: Erro interno no servidor.
 */
router.patch(
  "/:id/role",
  authMiddleware,
  authorize("ADMIN"),
  UserController.UpdateRole,
);

export default router;
