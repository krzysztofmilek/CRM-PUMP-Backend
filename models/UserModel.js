const mongoose = require('mongoose');

const UserModel = new mongoose.Schema(
    {
        active:Boolean,
        admin: Boolean,
        login:String,
        name: String,
        password: String,
        phone: String,        
        position: String,
        email: String,
    },
    { timestamps: true })

module.exports = mongoose.model('User', UserModel);
