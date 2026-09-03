import express from "express";
import cors from "cors";
import teamRoutes from "./routes/teamRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import healthRoutes from "./routes/healthRouters.js"
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/team", teamRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/health",healthRoutes)


app.use(errorMiddleware);

export default app;
