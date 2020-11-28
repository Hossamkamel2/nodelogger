const mongoose = require("mongoose");
var logs=mongoose.model("logs",{
    
       name:{
           type:String,
           required:true
       },
       main:{
        temp_min:{
            type:Number,
            required:true
        },
        temp_max:{
            type:Number,
            required:true
        }
       },
       weather:[{
           description:{
               type:String,
               required:true
           }
       }]
    
})

exports.logs=logs;