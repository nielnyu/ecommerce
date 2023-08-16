const express = require("express")
const app = express()
const path = require("path");

const products = require("./routes/product")

app.use("/product", products);

app.listen(3000,() => {console.log("Server started on port 3000")})

module.exports = app;