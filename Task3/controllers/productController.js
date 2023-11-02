const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category } = req.body;
    const product = new Product({
      name,
      description,
      price,
      quantity,
      category,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the product' });
  }
};

