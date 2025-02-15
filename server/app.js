import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import userRouter from "./routes/user.js";
import instructorRouter from "./routes/instructor.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor", instructorRouter)
// http://localhost:3015/api/v1/user

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
