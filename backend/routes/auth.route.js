import express from "express"
const router =express.Router();
import {login, logout, signup,refreshToken,checkAuth} from "../controllers/auth.controller.js"
import {restrictToLoggedinUserOnly} from "../middleware/auth.middleware.js"

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/check-auth", restrictToLoggedinUserOnly, checkAuth);
router.post("/refresh-token",refreshToken)
export default router