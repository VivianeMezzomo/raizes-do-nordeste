import express from "express";
import authRoutes from "./api/routes/authRoute.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./api/swagger/swagger.js";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "API funcionando",
  });
});

export default app;
