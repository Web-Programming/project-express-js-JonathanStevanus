const express=require("express");
const router=express.Router();
const user=require('../../controllers/controllerUser');

//url create --POST (/api/produk)
router.post("/",user.create);
//url read all --GET
router.get("/",user.all);
//url read one-detail --GET
router.get("/:id",user.detailUser);
//url update --PUT
router.put("/:id",user.update);
//url delete --DELETE
router.delete("/:id",user.remove);

module.exports=router;
