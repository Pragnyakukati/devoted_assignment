const express = require('express');
const ProductGroup = require('../models/ProductGroup');
const router = express.Router();

// Create a new product group
router.post('/', async (req, res) => {
  try {
    const newGroup = new ProductGroup(req.body);
    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all product groups
router.get('/', async (req, res) => {
  try {
    const groups = await ProductGroup.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product group
router.put('/:id', async (req, res) => {
  try {
    const updatedGroup = await ProductGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product group
router.delete('/:id', async (req, res) => {
  try {
    await ProductGroup.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
