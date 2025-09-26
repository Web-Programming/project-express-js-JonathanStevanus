var express=require('express');
var router=express.Router();
var products=require('../data/products');

router.get("/:id",function(req,res,next){
    const productId=parseInt(req.params.id);
    const product=products.find(p=>p.id===productId);

    if(!product){
        return res.status(404).send("Produk tidak ditemukan!");
    }

    res.render("product-details",{
        title:product.name,
        products:[product] // kirim sebagai array
    });
});


module.exports=router;