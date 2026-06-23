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
      if (error.message === "PRODUTO_JA_CADASTRADO") {
        return res.status(400).json({
          error: "PRODUTO_JA_CADASTRADO",
          maessage: "Produto já cadastrado.",
        });
      }

      if (error.message === "NOME_INVALIDO") {
        return res.status(400).json({
          error: "NOME_INVALIDO",
          maessage: "O nome do produto deve possuir no mínimo 3 caracteres.",
        });
      }

      if (error.message === "PRECO_INVALIDO") {
        return res.status(400).json({
          error: "PRECO_INVALIDO",
          maessage: "O preço deve ser superior a R$ 0,00.",
        });
      }

      if (error.message === "ESTOQUE_INVALIDO") {
        return res.status(400).json({
          error: "ESTOQUE_INVALIDO",
          maessage: "Produto fora de estoque.",
        });
      }

      return res.status(500).json({
        error: "ERRO_INTERNO",
        maessage: "Erro interno.",
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
