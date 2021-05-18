import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import colors from "colors";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(errorMiddleware.notFound);

app.use(errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`server running up in ${process.env.NODE_ENV} on ${PORT}`.yellow);
});
