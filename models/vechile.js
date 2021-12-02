const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    vName: String, 
    vEngine: {
        type: Number,
        min: 1,
        max: 900,
      
    }, 
    vCost:{
        type: Number,
        min: 200,
        max: 500,
      
    }
}) 
 
module.exports = mongoose.model("vechile", 
costumeSchema) 