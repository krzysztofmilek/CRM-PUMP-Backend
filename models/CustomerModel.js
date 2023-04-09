const mongoose = require('mongoose');


    const CustomerModel = new mongoose.Schema(
        {   
           
            action:Object,
            agreement:Boolean,
            city:String,
            email: String,
            name: String,  
            phone: String,
            street: String,
            zip: String
         },
        { timestamps: true }


)

module.exports = mongoose.model('Customer', CustomerModel)