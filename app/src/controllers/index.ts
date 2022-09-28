import {Request, Response} from "express";

export const home =  (req:Request, res:Response) => {
    return res.status(200).json({message: 'Welcome to Wicode-cms api v1'});
};
