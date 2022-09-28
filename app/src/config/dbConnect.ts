import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbUri:string = process.env.MONGO_URI

export const dbConnection = async () =>{
     await mongoose.connect(dbUri).then(()=>{
        console.log('db connected')
    }).catch((err:Error)=>{
        console.log(err.message)
     })
}