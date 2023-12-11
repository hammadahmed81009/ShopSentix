const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/shopsentix")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("users",newSchema)

module.exports=collection