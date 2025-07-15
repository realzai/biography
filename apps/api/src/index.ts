import express from "express";
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import assetsRoutes from "./routes/assetsRoutes";
import contactRoutes from "./routes/contactRoutes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import corsOptions from "./config/corsOptions";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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
