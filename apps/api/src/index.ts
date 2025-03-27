import express from "express";
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import assetsRoutes from "./routes/assetsRoutes";
import contactRoutes from "./routes/contactRoutes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "https://www.kingzai.com",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(logger);

app.use("/", indexRoutes);
app.use("/api", assetsRoutes);
app.use("/api", contactRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
