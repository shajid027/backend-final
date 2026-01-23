const Product = require('../models/product.model');

// 1. Get All Products (For Everyone)

const getAllProducts = async (req, res) => {
  try {
    // FILTERING (Query)
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(el => delete queryObj[el]);

    // PAGINATION LOGIC
    const page = req.query.page * 1 || 1;    
    const limit = req.query.limit * 1 || 4;  
    const skip = (page - 1) * limit;

    // EXECUTE QUERY
    const products = await Product.find(queryObj).skip(skip).limit(limit);

    // COUNT TOTAL 
    const totalProducts = await Product.countDocuments(queryObj);

    res.status(200).json({
      status: "success",
      results: products.length,
      total: totalProducts,
      page,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// 2. Create Product (Admin Only)
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: "Product created", newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
};

// 3. Update Product (Admin Only)
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    // Jodi product khuje na pay 
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product with this ID does not exist in the database." });
    }

    res.status(200).json({ message: "Product updated", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

// 4. Delete Product (Admin Only)
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Jodi product khuje na pay 
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product with this ID does not exist in the database." });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};
module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };