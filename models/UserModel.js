const mongoose = require('mongoose');

const UserModel = new mongoose.Schema(
    {
        active:{type:Boolean, require:true},
        admin: {type:Boolean, require:true},
        login:{type:String, require:true, unique: true},
        name: {type:String, require:true},
        password: {type:String, require:true},
        phone: {type:String, require:true},      
        position:{type:String, require:true},
        email: {type:String, require:true, unique: true},
        customers:
        [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Customer" 
            }
        ]
    },
    { timestamps: true })

module.exports = mongoose.model('User', UserModel);
