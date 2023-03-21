const express = require('express');
const connection = require('./connection')
const app = express();
const productRoute = require('./routes/products')

app.use('/product', productRoute);

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
module.exports = app;