const { query } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const connection = require('../connection')
const router = express.Router();

router.post('/create', (req, res)=>{
    let product = req.body;
    query = 'insert into product(name, description, price) values(?,?,?)';
    connection.query(query, [product.name, product.description, product.price], (err, results)=>{
        if(!err){
            return res.status(200).json({message: "Post created successfully!"})
        } else{
            return res.status(500).json(err)
        }
    })

})

module.exports = router;