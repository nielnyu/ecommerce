const express = require("express");
const router = express.Router();
const db = require("../database")


router.get("/",  async (req,res)=>{
    const result = await db.promise().query("SELECT * FROM Products")
    res.status(200).json(result[0])
    console.log("Product List is working")
})

router.post("/", async(req, res) => {
    try{
        const sql = "UPDATE Products SET quantity = quantity - 1 WHERE prod_id = ?"
        const result = await db.promise().query(sql, [req.body.id])
        res.status(200).json({message: "Success"})

    }
    catch(err){
        res.json({message: err.message})
    }


})

module.exports = router;


