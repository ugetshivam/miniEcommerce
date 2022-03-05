const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        trim: true
    },
    img:{
        type: String
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;