const mongoose = require("mongoose");
const schema = mongoose.Schema;

const companySchema = new schema({
  
  companyId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  primaryText : {
    type : String,
    required:true
  },
  headline : {
    type : String,
    required:true
  },
  description :{
    type : String,
    required:false
  },
  CTA : {
    type : String,
    required:true
  },
  imageUrl : {
    type : String,
    required:true
  },
});


const companyModel = new mongoose.model("companie", companySchema);
module.exports = companyModel;
