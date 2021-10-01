const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/user", userRoute);
