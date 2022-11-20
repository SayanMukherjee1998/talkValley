const mongoose = require("mongoose")
const schema = mongoose.Schema

const adSchema = new schema({
    id: {
        type: String,
        required: true,
      },
    name:{
        type : String,
        required : true,
    },
    url : {
        type : String,
        required : true,
    }
})



const adModel = new mongoose.model("ad",adSchema)
module.exports = adModel