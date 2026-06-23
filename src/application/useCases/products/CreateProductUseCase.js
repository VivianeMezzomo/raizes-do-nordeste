import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";

class CreateProductUseCase {
  async execute({ name, price, description, active, stock }) {
    const produtoExistente = await ProductRepository.findByName(name);

    if (produtoExistente) {
      throw new Error("PRODUTO_JA_CADASTRADO");
    }

    if (!name || name.trim().length < 3) {
      throw new Error("NOME_INVALIDO");
    }

    if (price <= 0) {
      throw new Error("PRECO_INVALIDO");
    }

    if (stock < 0) {
      throw new Error("ESTOQUE_INVALIDO");
    }

    const order = await ProductRepository.create({
      name,
      price,
      description,
      active,
      stock,
    });

    return order;
  }
}

export default CreateProductUseCase;
