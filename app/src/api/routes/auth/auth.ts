import {Router} from "express"
import {signIn, signUp} from "../../../controllers/auth/auth";


const router = Router();

router.route('/signup').post(signUp)
router.route("/signin").post(signIn)

export const authRoute = router