import express from "express";
import {restrictToLoggedinUserOnly } from "../middleware/auth.middleware.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/", restrictToLoggedinUserOnly, getCoupon);
router.post("/validate", restrictToLoggedinUserOnly, validateCoupon);

export default router;