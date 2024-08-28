const  mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{type:String,required:true},

    email:{type:String,required:true,unique:true},

    password:{type:String,required:true},

    confirmPassword:{type:String,required:true},

    mobileNo:{type:Number,required:true},

    gender:{type:String,required:true},

    department:{type:mongoose.Schema.Types.ObjectId, ref:"Department"}

})

const User =   mongoose.model("User",userschema)
module.exports = User;