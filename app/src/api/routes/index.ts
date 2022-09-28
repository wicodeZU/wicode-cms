import {Router} from "express";
import {home} from "../../controllers";
import {authRoute} from "./auth/auth";

const homeRouter = Router();

homeRouter.route("/").get(home)

export  {homeRouter, authRoute}