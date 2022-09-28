import mongoose from "mongoose";

const schema = mongoose.Schema

const userSchema = new schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

export const User = mongoose.model("User", userSchema)