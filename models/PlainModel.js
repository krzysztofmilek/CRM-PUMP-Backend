const mongoose = require('mongoose');


    const PlainModel = new mongoose.Schema(
        {   
            0: Number,
            1: Number,
            2: Number,
            3: Number,
            4: Number,
            5: Number,
            6: Number,
            7: Number,
            8: Number,
            9: Number,
            10: Number,
            11: Number,
            id_user: Object
            
          
         },
        { timestamps: true }


)

module.exports = mongoose.model('Plain', PlainModel)