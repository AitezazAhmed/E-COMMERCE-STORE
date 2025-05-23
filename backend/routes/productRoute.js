import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getFeaturedProducts,
	getProductsByCategory,
	getRecommendedProducts,
	toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, restrictToLoggedinUserOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", restrictToLoggedinUserOnly, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", restrictToLoggedinUserOnly, adminRoute, createProduct);
router.patch("/:id", restrictToLoggedinUserOnly, adminRoute, toggleFeaturedProduct);
router.delete("/:id", restrictToLoggedinUserOnly, adminRoute, deleteProduct);

export default router;