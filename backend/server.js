import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import path from "path";
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/productRoute.js"
import cartRoutes from "./routes/cartRoutes.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app= express()
const __dirname = path.resolve();
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // if you're using cookies (e.g., for JWT auth)
}));
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cartRoute",cartRoutes)
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(PORT,()=>{
    console.log("server is running",PORT)
    connectDB()
})
