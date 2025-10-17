const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username harus diisi'],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,'Email harus diisi'],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Harap isi alamat email yang valid'
        ]
    },
    password:{
        type:String,
        required:[true,'Password harus diisi'],
        minlength:[6,'Password minimal 6 karakter'],
        select:false,//Penting: jangan sertakan password saat get query
    },
    address:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model('User',userSchema);
module.exports=User;