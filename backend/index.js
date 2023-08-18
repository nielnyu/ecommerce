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

app.use("/api/product", products);
app.use("/api/register", register)
app.use("/api/login", login)

app.use(passport.initialize())
app.use(passport.session())

const port = process.env.port || 3000
app.listen(port,() => {console.log("Server started on port 3000")})

module.exports = app;