const express = require('express');
const app = express();
const productRoute = require('./routes/productRoutes')

app.use(express.json());
app.use(productRoute);


app.get('/', (req,res)=>{
    res.send("hello");
})
app.listen(8000, ()=>{
    console.log("Server started at port 8000");
})