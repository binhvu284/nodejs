const db = require("../database/database");

module.exports = class Product {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    db.execute("SELECT * FROM products");
  }

  static findById(id) {}
};
