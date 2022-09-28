import {Router} from "express";
import {home} from "../../controllers";

const router = Router();

router.route("/").get(home)

export const homeRouter = router;