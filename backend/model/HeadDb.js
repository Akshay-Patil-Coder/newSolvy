const  mongoose = require("mongoose");

const headschema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const Head =   mongoose.model("Head",headschema)
module.exports = Head;