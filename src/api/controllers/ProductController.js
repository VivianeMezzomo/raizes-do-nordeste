import CreateProductUseCase from "../../application/useCases/products/CreateProductUseCase.js";
import FindAllProductsUseCase from "../../application/useCases/products/FindAllProductsUseCase.js";

class ProductController {
  async create(req, res) {
    try {
      const { name, price, description, active, stock } = req.body;

      const useCase = new CreateProductUseCase();

      const produto = await useCase.execute({
        name,
        price,
        description,
        active,
        stock,
      });

      return res.status(201).json(produto);
    } catch (error) {
      if (error.message === "NOME_INVALIDO") {
        return res.status(400).json({
          error: "NOME_INVALIDO",
        });
      }

      if (error.message === "PRECO_INVALIDO") {
        return res.status(400).json({
          error: "PRECO_INVALIDO",
        });
      }

      if (error.message === "ATIVO_INVALIDO") {
        return res.status(400).json({
          error: "ATIVO_INVALIDO",
        });
      }

      if (error.message === "ESTOQUE_INVALIDO") {
        return res.status(400).json({
          error: "ESTOQUE_INVALIDO",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
      });
    }
  }

  async findAll(req, res) {
    try {
      const useCase = new FindAllProductsUseCase();

      const produtos = await useCase.execute();

      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json({
        error: "ERRO_INTERNO",
        message: "Erro ao buscar produtos.",
      });
    }
  }
}

export default new ProductController();
