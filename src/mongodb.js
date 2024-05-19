const mongoose = require('mongoose');
require('dotenv').config();


mongoose.set('strictQuery', false); // Suppress Mongoose deprecation warning

mongoose.connect(process.env.MONGODB_CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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