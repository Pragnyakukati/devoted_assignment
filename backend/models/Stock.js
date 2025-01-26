// models/Stock.js
const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Relationship with Product model
      required: true,
    },
    change: {
      type: Number, // Positive for additions, negative for reductions
      required: true,
    },
    reason: {
      type: String, // e.g., "purchase", "sale", "adjustment"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Stock', StockSchema);
