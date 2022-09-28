import {Request, Response} from "express";
import {User} from "../../schemas/Users";
import bcrypt from "bcrypt"

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
        return res.status(200).json({newUser})
    }catch (error){
        return res.status(500).json(
            {message:error}
        )
    }
}