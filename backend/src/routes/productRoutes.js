const express = require('express');
const router = express.Router();
const products = [
    {
        name: "Iphone", 
        price: "$1000"
    },
    {
        name: "AirJordans",
        price: "$300"
    },
    {
        name: "Converse All Stars",
        price: "$200"
    },
    {
        name: "MacBook Air",
        price: "$2000"
    }
]

router.get('/products', (req,res)=>{
    res.send(products);
});

router.post('/products', (req, res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    console.log(products);
    res.status(200).json({msg: "Item added successfully"});
})

module.exports = router;