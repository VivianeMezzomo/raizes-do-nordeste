import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import ProductController from "../controllers/ProductController.js";

const router = Router();
/**
 * @swagger
 * /products/findAll:
 *   get:
 *     summary: Localiza todos os productos cadastrados
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Produtos localizados com sucesso
 */
router.get("/findAll", ProductController.findAll);

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Cria um novo produto
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Produto criado com sucesso
 */
router.post(
  "/create",
  authMiddleware,
  authorize("ADMIN"),
  ProductController.create,
);
export default router;
