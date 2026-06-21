class Product {
  constructor({ id, name, description, price, active = true, stock }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.active = active;
    this.stock = stock;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }
}

export default Product;
