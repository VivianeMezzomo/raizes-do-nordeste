import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import OrderController from "../controllers/OrderController.js";

const router = Router();
/**
 * @swagger
 * /orders/create:
 *   post:
 *     summary: Cria um novo pedido
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: Pedido criado com sucesso
 */
router.post("/create", authMiddleware, OrderController.create);

/**
 * @swagger
 * /orders/status:
 *   post:
 *     summary: Verifica o status de um pedido
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: Status retornado com sucesso
 */
router.get("/:id/status", authMiddleware, OrderController.getStatus);

export default router;
