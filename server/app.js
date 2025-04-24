import express from "express";
import morgan from "morgan";
// import mongoose from "mongoose";
import dotenv from "dotenv";

// import cors from "cors";

dotenv.config();

// mongoose.connect(process.env.URI).then(() => {
//   console.log("connected");
// });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Your frontend's origin
//     credentials: true, // Enable credentials (cookies, etc.)
//   })
// );

app.get("/api/status", (req, res) => {
  res.send({ status: "Server is running" });
});

// app.use("/api/joke", jokesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
