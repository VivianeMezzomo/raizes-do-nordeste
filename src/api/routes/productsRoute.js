import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import ProductController from "../controllers/ProductController.js";

const router = Router();
/**
 * @swagger
 * /products/findAll:
 *   get:
 *     summary: Localiza os produtos cadastrados.
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Produtos localizados com sucesso.
 *       400:
 *          description: Erro ao localizar os produtos.
 *       500:
 *          description: Erro interno no servidor.
 */
router.get("/findAll", ProductController.findAll);

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Cria um novo produto.
 *     tags:
 *       - Product
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
 *                 description: Nome do produto.
 *               price:
 *                 type: number
 *                 required: true
 *                 description: Preço do produto.
 *               description:
 *                 type: string
 *                 required: true
 *                 description: Descrição do produto.
 *               active:
 *                 type: boolean
 *                 required: true
 *                 description: Se o produto está ativo ou não.
 *               stock:
 *                 type: number
 *                 required: true
 *                 description: Quantidade de produtos no estoque.
 *     responses:
 *       200:
 *         description: Produto criado com sucesso.
 *       400:
 *          description: Erro ao criar o produto.
 *       500:
 *          description: Erro interno no servidor.
 */
router.post(
  "/create",
  authMiddleware,
  authorize("ADMIN"),
  ProductController.create,
);
export default router;
