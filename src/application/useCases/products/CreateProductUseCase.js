import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";

class CreateProductUseCase {
  async execute({ nome, preco, descricao, ativo, estoque }) {
    if (!nome || nome.trim().length < 3) {
      throw new Error("NOME_INVALIDO");
    }

    if (preco <= 0) {
      throw new Error("PRECO_INVALIDO");
    }

    // if (ativo !== true || ativo !== false) {
    //   throw new Error("ATIVO_INVALIDO");
    // }

    if (estoque < 0) {
      throw new Error("ESTOQUE_INVALIDO");
    }

    const produto = await ProductRepository.create({
      nome,
      preco,
      descricao,
      ativo,
      estoque,
    });

    return produto;
  }
}

export default CreateProductUseCase;
