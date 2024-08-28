const  mongoose = require("mongoose");

const ticketschema = new mongoose.Schema({
createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
Department:{type:String,required:true},
ParentCategory:{type:String,required:true},
ChildCategory:{type:String,required:true},
Description:{type:String,required:true},
AssignedTo:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
status:{type:String,default:"Created"}

},
{
    timestamps:true,
})

const Tickets =   mongoose.model("Ticket",ticketschema)
module.exports = Tickets;