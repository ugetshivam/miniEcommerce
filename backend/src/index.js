const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes')
const seedDB = require('../seed');

mongoose.connect('mongodb://localhost:27017/MEcom')
        .then(()=>{
            console.log("DB Connected");
        })
        .catch((e)=>{
            console.log(e)
        });

// seedDB(); // PUTTING DUMMY DATA INTO THE PRODUCT COLLECTION

app.use(express.json());
app.use(productRoute);


app.get('/', (req,res)=>{
    res.send("Whats up?");
})

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})