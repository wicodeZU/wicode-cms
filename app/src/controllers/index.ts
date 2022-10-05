import {Request, Response} from "express";
import {signIn, signUp} from "./auth/auth";

export default {signUp, signIn}


export const home =  (req:Request, res:Response) => {
    return res.status(200).json({message: 'Welcome to Wicode-cms api v1'});
};