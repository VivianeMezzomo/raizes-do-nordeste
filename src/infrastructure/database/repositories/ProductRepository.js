import ProductModel from "../models/ProductModel.js";

class ProductRepository {
  async create(data) {
    return ProductModel.create(data);
  }

  async findById(id) {
    return ProductModel.findById(id);
  }

  async findAll() {
    return ProductModel.find();
  }
}

export default new ProductRepository();
