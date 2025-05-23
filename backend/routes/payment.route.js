import express from "express";
import {restrictToLoggedinUserOnly } from "../middleware/auth.middleware.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", restrictToLoggedinUserOnly, createCheckoutSession);
router.post("/checkout-success", restrictToLoggedinUserOnly, checkoutSuccess);

export default router;