const LocalStrategy = require("passport-local");
const passport = require("passport");
const db = require("../database")


passport.use(new LocalStrategy(
    async (email, password, done) =>{
        const result = await db.promise().query(`SELECT * FROM Users WHERE email = '${email}'`)
        console.log(result)
    }
))
