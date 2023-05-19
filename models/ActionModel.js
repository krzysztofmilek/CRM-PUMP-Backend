const mongoose = require('mongoose');


    const ActionModel = new mongoose.Schema(
        {   contactData: Date, 
            nextContactData:Date,
            information:String,
            conatactWay:String,
            direction:String,
            fileName:String,
            status:String, //open, closed
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            customer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Customer"
            }
          
         },
        { timestamps: true }


)

module.exports = mongoose.model('Action', ActionModel)