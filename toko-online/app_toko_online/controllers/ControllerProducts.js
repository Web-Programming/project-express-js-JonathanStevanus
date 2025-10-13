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

//membuat rest api
const all = async (req, res) => {
 	try {
        const prod = await Product.find({}); 
        res.status(200).json(
            {
                status: true,
                message: "Data produk berhasil diambil",
                data: prod
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Gagal memuat produk"
        });
    }
}; 

//CRUD
const create=async(req,res)=>{
    try{
        //1. ambil data dari body
        const newProduct=new Product({
           name :req.body.name,
           price :req.body.price,
           description :req.body.description,
           stock :req.body.stock || 0
        })
        //2. simpan ke mongoDB melalui model
        const product=await newProduct.save();
        //3. kirim response sukses ke user
        res.status(200).json({
            status:true,
            message:"Produk berhasil ditambahkan",
            data:product
        })
    }catch(err){
        
     res.status(400).json({
         status:false,
         message:err.message
     });   
    }
};

//read one
const detailProduk=async(req,res)=>{
    try{
        const productId=req.params.id;
        const product=await Product.findById(productId);
        if(!product){
            return res.status(404).json({
                status:false,
                message:"Produk tidak ditemukan"
            });
        }
        res.status(200).json({
            status:true,
            message:"Detail produk berhasil diambil",
            data:product
        });
    }catch(err){
        res.status(500).json({
            status:false,
            message:"Gagal memuat detail produk"
        });
    }
};

//update
const update=async(req,res)=>{
try{
    const product=await Product.findByIdAndUpdate(
        req.params.id,req.body,{
            new:true,
            runValidators:true
        }
        );
        if(!product){
            res.status(404).json({
                status:false,
                message:"Produk tidak ditemukan"
            });
        }
            res.status(200).json({
            status:true,
            message:"Produk berhasil diupdate",
            data:product
        });
}catch(err){
    
        res.status(500).json({
            status:false,
            message:"Gagal memuat detail produk"
        });
    }


};
//delete
const remove=async(req,res)=>{

};
module.exports={index,detail,all,create,detailProduk,update,remove};