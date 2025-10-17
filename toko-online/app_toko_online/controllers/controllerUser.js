var User=require("../models/users");


const all = async (req, res) => {
 	try {
        const user = await User.find({}); 
        res.status(200).json(
            {
                status: true,
                message: "Data user berhasil diambil",
                data: user
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Gagal memuat user"
        });
    }
}; 

const create=async(req,res)=>{
    try{
        //1. ambil data dari body
        const newUser=new User({
           username :req.body.username,
           email :req.body.email,
           password :req.body.password,
           address :req.body.address,
           isAdmin :req.body.isAdmin,
           createAt :req.body.createAt

        })
        //2. simpan ke mongoDB melalui model
        const user=await newUser.save();
        //3. kirim response sukses ke user
        res.status(200).json({
            status:true,
            message:"User berhasil ditambahkan",
            data:user
        })
    }catch(err){
        
     res.status(400).json({
         status:false,
         message:err.message
     });   
    }
};

const detailUser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await Product.findById(userId);
        if(!user){
            return res.status(404).json({
                status:false,
                message:"User tidak ditemukan"
            });
        }
        res.status(200).json({
            status:true,
            message:"Detail user berhasil diambil",
            data:product
        });
    }catch(err){
        res.status(500).json({
            status:false,
            message:"Gagal memuat detail user"
        });
    }
};

const update = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,  //mengembalikan dokumen yg telah diupdate
            runValidators: true //menjalankan validasi schema saat update
        });

        if(!user){
            res.status(404).json({
                status:false, message: "User tidak ditemukan",
            });
        }
        //kirim respon sukses
        res.status(200).json({
            status:true, message: "User berhasil diupdate", data:product
        });
    }catch(err){
        if(err.name === 'CastError'){
            res.status(400).json({
                status: false, message: "Format ID tidak valid"
            });
        }else if(err.name === 'ValidationError'){
            res.status(400).json({
                status: false, message: err.message
            });
        }else{
            res.status(500).json({
                status: false, message: 'Internal server error'
            });
        }
    }
};

const remove = async(req, res) => {
    try{
        //hapus menggunakan methdod findByIdAndDelete
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){ //kirim respon gagal
            res.status(404).json({
                status:false, message: "User tidak ditemukan",
            });
        }else{
            //kirim respon sukses
            res.status(200).json({
                status:true, message: "User berhasil dihapus"
            });
        }
    }catch(err){
        if(err.name === 'CastError'){
            res.status(400).json({
                status: false, message: "Format ID tidak valid"
            });
        }else{
            res.status(500).json({
                status: false, message: 'Internal server error'
            });
        }
    }
};
module.exports={all,create,detailUser,update,remove};