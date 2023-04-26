
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports =(req,res,next)=>{
    res.JSON("http://localhost:3000/login", {
        error:true,
    message: "You are not logged in",
});
    



}