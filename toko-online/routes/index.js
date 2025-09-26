 var express = require('express');
 var router = express.Router();
 var products = require('../data/products');


/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { 
     title: 'Toko Online Sederhana',
     products:products });
 });

 router.get('/search', function(req, res, next) {
    const query = req.query.q;
    const filteredProducts = products.filter(q =>
        q.name.toLowerCase().includes(query.toLowerCase()) ||
        q.description.toLowerCase().includes(query.toLowerCase())
    );

    res.render('index', {
        title: 'Hasil Pencarian: ' + query,
        products: filteredProducts
    });
});
 module.exports = router;
