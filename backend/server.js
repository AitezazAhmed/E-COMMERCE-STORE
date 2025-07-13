import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/productRoute.js"
import cartRoutes from "./routes/cartRoutes.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser";
dotenv.config()
const app= express()
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:5173', // for local development
    'https://e-commerce-store-5c9i.vercel.app' // ✅ your live frontend
  ],
  credentials: true,
  origin: allowedOrigins,
}));


app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cartRoute",cartRoutes)
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.listen(PORT,()=>{
    console.log("server is running",PORT)
    connectDB()
})
