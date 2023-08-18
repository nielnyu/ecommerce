const express = require("express");
const router = express.Router();
const db = require("../database")
const { authLogin } = require("../validate_schema")
const passport = require("passport")
bcrypt = require("bcrypt")


router.post("/", async (req,res) =>{
    try{
        const result = await authLogin.validateAsync(req.body)
        const sql = "SELECT * FROM Users WHERE email = ?";
        db.query(sql, req.body.email, (err, data)=>{
            if (err){
                res.json({message: err.message})
            }
            if (data.length > 0){
                //console.log(data[0].password)
                const match = bcrypt.compareSync(req.body.password, data[0].password)
                if (match){
                    res.json({message: "Success"})
                }
                else{
                    res.json({message:"Incorrect Password"})
                }
            }
            else{
                console.log(req.body.email)
                res.json({message: "Email Does Not Exist Try Again"})
            }
        })
    }catch(err){
        res.json({message: err.message})
    }

    
})


module.exports = router;