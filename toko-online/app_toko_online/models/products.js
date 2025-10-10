const mongoose = require('mongoose');
//buat skema produk
const productSchema = new mongoose.Schema({
    //tidak perlu membuat field id, karena mongoose otomatis membuatkan field _id
    name: {
        type: String,   
        required: [ true,'Nama produk harus diisi' ],
        trim: true//menghilangkan spasi di awal dan akhir
    },
    price: {
        type: Number,
        required: [ true,'Harga produk harus diisi' ],
        min:[1000,'Harga produk minimal 1000']//nilai minimal
        // max:[1000,'Harga produk minimal 1000']
    },
    description: {
        type: String,
        required: false//menandakan field ini tidak wajib diisi
    },
    stock: {
        type: Number,
        default: 0//memberikan nilai bawaan/default
    },
    createAt:{
        type: Date,
        default: Date.now//memberikan nilai bawaan berupa tanggal sekarang
    }
});


//Buat model dari skema
const Product = mongoose.model('Product',productSchema);
module.exports = Product;