import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
