var Product=require('../models/products');
//var products=require('../../data/products.json');


const index= async (req,res,next)=>{
    try{
        const prod =await Product.find({},'name price description');
        console.table(prod)
        res.render('index',{
            title:'Toko Online Sederhana',
            products:prod
        });
    }
    catch(err){
        res.status(404).send("Gagal memuat produk");
    }
    };

const detail=async(req,res)=>{
    try{
        const productId=req.params.id;
        const product=await Product.findById(productId);
        if(!product){
            return res.status(404).send("Produk tidak ditemukan!");
        }
        res.render("product-details",{
            title:product.name,
            products:[product] // kirim sebagai array
        });
    }
    catch(err){
        res.status(404).send("Produk tidak ditemukan!");
    }
}




module.exports={index,detail}