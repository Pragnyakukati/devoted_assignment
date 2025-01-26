const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

// Log stock changes
router.post('/', async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get stock history for a product
router.get('/:productId', async (req, res) => {
  try {
    const stockHistory = await Stock.find({ product: req.params.productId });
    res.status(200).json(stockHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
