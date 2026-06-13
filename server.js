import app from "./src/app.js";
import dotenv from "dotenv";
import connectDatabase from "./src/infrastructure/database/connection.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startServer();
