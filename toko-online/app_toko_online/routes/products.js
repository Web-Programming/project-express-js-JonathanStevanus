var express=require('express');
var router=express.Router();

// var products=require('../../data/products');
var reviewController=require('../controllers/ControllerReview');
var controllerProducts=require('../controllers/ControllerProducts');
router.get('/:productId/reviews/:reviewId', reviewController.getReview);
router.get('/all',controllerProducts.index);
router.get('/:id',controllerProducts.detail);




//     if(!product){
//         return res.status(404).send("Produk tidak ditemukan!");
//     }

//     res.render("product-details",{
//         title:product.name,
//         products:[product] // kirim sebagai array
//     });
// });


module.exports=router;