const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HospitalManagmentSystem")
.then(()=>{
    console.log("monog conneceted")
})
.catch(()=>{
    console.log("failed to connect");
})

//creting documents

const LogInSchemea = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

//defining the collections

const collection = new mongoose.model("collection1",LogInSchemea);
module.exports = collection