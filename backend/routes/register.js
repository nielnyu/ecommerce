const express = require("express");
const router = express.Router();
const db = require("../database")
const { authSchema } = require("../validate_schema")
const bcrypt = require("bcrypt")



router.post("/", async (req,res) =>{
    try{
        const result = await authSchema.validateAsync(req.body)
        const {email, password, repeat_password} = req.body
        const sql = "SELECT * FROM Users WHERE email = ?";
        db.query(sql, req.body.email, (err, data) =>{
            if(err){
                res.json({message: err.message})
            }
            if (data.length > 0){
                res.json({message: "Email Already Exist"})
            }
            else{
                bcrypt.hash(password, 10, function(err, hash) {
                    //store in hash in DB
                    db.promise().query("INSERT INTO Users(email, password) values(?,?)", [req.body.email, hash])
                })
                res.status(200).json({message: "Email Added"})
            }
        })
    }
    catch (err) {
        res.json({message: err.message})
    }

})

module.exports = router;
