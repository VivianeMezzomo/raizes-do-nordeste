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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderChannel:
 *                 type: string
 *                 required: true
 *                 description: Canal de pedido (APP, TOTEM, BALCAO, PICKUP, WEB).
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: true
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: ID do produto.
 *                     quantity:
 *                       type: integer
 *                       description: quantidade do produto.
 *     responses:
 *       200:
 *         description: Pedido criado com sucesso.
 *       400:
 *          description: Erro ao criar o pedido.
 *       500:
 *          description: Erro interno no servidor.
 */
router.post("/create", authMiddleware, OrderController.create);

/**
 * @swagger
 * /orders/{id}/status:
 *   get:
 *     summary: Verifica o status de um pedido
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Status retornado com sucesso.
 *       400:
 *          description: Erro ao consultar o status do pedido.
 *       500:
 *          description: Erro interno no servidor.
 */
router.get("/:id/status", authMiddleware, OrderController.getStatus);

export default router;
