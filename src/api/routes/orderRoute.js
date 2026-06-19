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

export default router;
