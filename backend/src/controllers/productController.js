const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
    } catch (err) {
        res.status(500).json({ msg: "Cannot fetch products at the moment" });
    }
};


const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const addProduct = new Product(newProduct);
        await addProduct.save(); // ADDS PRODUCT TO THE DATABASE
        res.status(201).json({ msg: "Product added to the database" });
    } catch (err) {
        res.status(401).json({ msg: "Cannot create a product at the moment" });
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        await Product.findByIdAndUpdate(id, {
            name: product.name,
            price: product.price,
            desc: product.desc,
            img: product.img
        }, {
            new: true
        });
        res.status(201).json({ msg: "Product updated" });
    } catch (err) {
        res.status(400).json({ msg: "SERVER ERROR" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(201).json({ msg: "Product deleted" });
    } catch (err) {
        res.status(500).json({ msg: "SERVER ERROR" });
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };