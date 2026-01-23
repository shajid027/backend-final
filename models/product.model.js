const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
});

const Product = new model('Product', productSchema);
module.exports = Product;
