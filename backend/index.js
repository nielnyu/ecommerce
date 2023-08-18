const express = require("express")
const passport = require("passport")
const local = require("./startegies/local")
const app = express()
app.use(express.json())
const path = require("path");
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:4200"
}))

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const products = require("./routes/product")
const register = require("./routes/register")
const login = require("./routes/login")

app.use("/product", products);
app.use("/register", register)
app.use("/login", login)

app.use(passport.initialize())
app.use(passport.session())


app.listen(3000,() => {console.log("Server started on port 3000")})

module.exports = app;