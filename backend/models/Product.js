// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductGroup', // Relationship with ProductGroup model
      required: true,
    },
    stock: {
      type: Number,
      default: 0, // Default stock level
    },
    reorderLevel: {
      type: Number,
      default: 10, // Default reorder level
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
