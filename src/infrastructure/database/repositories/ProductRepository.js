import ProductModel from "../models/ProductModel.js";

class ProductRepository {
  async create(data) {
    return ProductModel.create(data);
  }

  async findById(id) {
    return ProductModel.findById(id);
  }

  async findByName(name) {
    return ProductModel.findOne({ name });
  }

  async findAll() {
    return ProductModel.find();
  }

  async increaseStock(productId, quantity) {
    return ProductModel.findByIdAndUpdate(
      productId,
      {
        $inc: {
          stock: quantity,
        },
      },
      {
        returnDocument: "after",
      },
    );
  }
}

export default new ProductRepository();
