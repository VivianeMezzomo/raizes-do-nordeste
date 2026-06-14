import { Router } from "express";

const router = Router();

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
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */
router.post("/login", (req, res) => {
  res.json({
    accessToken: "jwt-teste",
  });
});

export default router;
