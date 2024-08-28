const { response } = require("express");
const  mongoose = require("mongoose");
const Department = require("./DepartmentDb");

const categorySchema = new mongoose.Schema({
  department:{type:mongoose.Schema.Types.ObjectId, ref:"Department"},
  parentCategory:{type:String,required:true},
  childCategory:[
    {
      name:{type:String,default:null},
    },
],
});

categorySchema.methods.addingCategory=async function(ChildCateGoryName){
  try {
    this.childCategory=await this.childCategory.concat({
      name:ChildCateGoryName,
    });
    const result=await this.save();
    return result;
    
  } catch (error) {
    return error;
  }

};
// categorySchema.index({ 'childCategory.name': 1 }, { unique: false });

const Category =   mongoose.model("Category",categorySchema)
module.exports = Category;