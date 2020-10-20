import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Array, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  oldPrice: { type: Number, default: 0},
  vendorCode: { type: String, required: true },
  sizes: { type: Object, required: true }
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
