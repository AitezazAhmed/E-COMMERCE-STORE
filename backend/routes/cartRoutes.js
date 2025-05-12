import express from "express"
import {addToCart,getCartProducts,removeAllFromCart,updateQuantity} from "../controllers/cart.controller.js"
import {restrictToLoggedinUserOnly} from "../middleware/auth.middleware.js"
const router =express.Router();
router.get("/",restrictToLoggedinUserOnly,getCartProducts)
router.post("/" ,restrictToLoggedinUserOnly, addToCart)
router.delete("/" ,restrictToLoggedinUserOnly, removeAllFromCart)
router.put("/:id" ,restrictToLoggedinUserOnly, updateQuantity)
export default router