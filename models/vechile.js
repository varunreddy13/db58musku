const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    vName: String, 
    vEngine: String, 
    vCost: Number 
}) 
 
module.exports = mongoose.model("vechile", 
costumeSchema) 