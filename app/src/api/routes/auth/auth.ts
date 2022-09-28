import {Router} from "express"
import signUp from "../../../controllers";

const router = Router();

router.route('/signup').post(signUp)

export const authRoute = router