import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import PaymentController from "../controllers/PaymentController.js";
import authorize from "../middleware/roleMiddleware.js";

const router = Router();

/**
 * @swagger
 * /payments/submit:
 *   post:
 *     summary: Registra o pagamento de um pedido.
 *     tags:
 *       - Payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 required: true
 *                 description: Id do pedido.
 *               result:
 *                 type: string
 *                 required: true
 *                 description: Resultado do pagamento (PENDENTE, APROVADO ou RECUSADO).
 *
 *     responses:
 *       200:
 *         description: Pagamento realizado com sucesso
 *       400:
 *          description: Erro ao efetuar o pagamento.
 *       500:
 *          description: Erro interno no servidor.
 */
router.post(
  "/submit",
  authMiddleware,
  authorize("ADMIN"),
  PaymentController.create,
);

export default router;
