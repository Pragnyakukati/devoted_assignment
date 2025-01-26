// models/ProductGroup.js
const mongoose = require('mongoose');

const ProductGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = mongoose.model('ProductGroup', ProductGroupSchema);
