import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/products", productRoutes);

app.use((err, req, res, next) => {});

app.listen(PORT, () => {
  console.log(`server running up in ${process.env.NODE_ENV} on ${PORT}`.yellow);
});
