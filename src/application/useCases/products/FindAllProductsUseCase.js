import ProductRepository from "../../../infrastructure/database/repositories/ProductRepository.js";

class FindAllProductsUseCase {
  async execute() {
    return ProductRepository.findAll();
  }
}

export default FindAllProductsUseCase;
