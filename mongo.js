const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://hammadahmed0394:lhrfscem1881009@cluster0.sjuramg.mongodb.net/shopsentix", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed to connect to database');
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