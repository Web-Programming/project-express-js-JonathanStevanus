var products=require('../../data/products.json');

const getProductById=(req,res,next)=>{
    const productId=parseInt(req.params.id);
    const product=products.find(p=>p.id===productId);

    if(!product){
        return res.status(404).send("Produk tidak ditemukan!");
    }

    res.render("product-details",{
        title:product.name,
        products:[product] 
    });
}

module.exports={getProductById};