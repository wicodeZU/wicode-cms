import {Request, Response} from "express";
import {User} from "../../schemas/Users";
import * as jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import dotenv from 'dotenv'
dotenv.config()

export const signUp = async (req:Request, res:Response) =>{
    const {username, email, password} = req.body
    try{
        const user = await User.findOne({email:email})
        if(user){
            return res.status(500).json(
                {message:"user already exists"}
            )
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        })
        await newUser.save()
        const token = jwt.sign(
            {data:newUser._id.toString()},
            process.env.JWT_SECRET,
            {expiresIn:"1h"})
        return res.status(200).json({newUser, token})
    }catch (error){
        return res.status(500).json(
            {message:error}
        )
    }
}
export const signIn = async (req:Request, res:Response) =>{
    const {email, password} = req.body
    try{
        const user = await User.findOne({email: email})
        if (!user){
            return res.status(400).json({message:"Kindly register"})
        }
        const hashedPassword = user.password
        const comparePassword = await bcrypt.compare(password, hashedPassword)
        if(!comparePassword){
            return res.status(400).json({message:"Kindly input the correct password"})
        }
        const token = jwt.sign(
            {data:user._id.toString()},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        return res.status(200).json({success:true, user, token})
    }catch (error){
        return res.status(500).json(
            {message:error.message}
        )
    }
}