import express from "express";
import { router as userRouter } from "./routes/userRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

export { app };
