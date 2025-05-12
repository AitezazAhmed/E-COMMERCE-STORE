import express from "express"
import addToCart from "../controllers/cart.controller"
import restrictToLoggedinUserOnly from "../middleware/auth.middleware"
const router =express.Router();
router.get("/",restrictToLoggedinUserOnly,getCartProducts)
router.post("/" ,restrictToLoggedinUserOnly, addToCart)
router.delete("/" ,restrictToLoggedinUserOnly, removeAllFromCart)
router.put("/:id" ,restrictToLoggedinUserOnly, updateQuantity)
export default router