import cors from "cors";
import "dotenv/config";
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import wishlistRouter from "./routes/wishlistRoute.js";

// APP CONFIG
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// API ENDPOINTS
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/wishlist", wishlistRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
