const express = require("express");
const router = express.Router();
const db = require("../database")


router.get("/",  async (req,res)=>{
    const result = await db.promise().query("SELECT * FROM Products")
    res.status(200).json(result[0])
    console.log("Product List is working")
})

module.exports = router;


