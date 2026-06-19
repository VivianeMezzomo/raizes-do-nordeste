import express from "express";
import authRoutes from "./api/routes/authRoute.js";
import userRoutes from "./api/routes/userRoute.js";
import productRoutes from "./api/routes/productsRoute.js";
import orderRoutes from "./api/routes/orderRoute.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./api/swagger/swagger.js";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "API funcionando",
  });
});

export default app;
