import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Start server
async function main() {
  const server = await registerRoutes(app);

  const PORT = process.env.PORT || 5001;
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`API server listening on port ${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});