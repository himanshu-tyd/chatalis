import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true,
    },
    name:{
        type:String
    },
    photo:{
        type:String
    }
},
    {timestamps:true}
)

export default mongoose.model('User',userSchema)