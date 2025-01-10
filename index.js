/** @format */

const express = require('express')
const AppRouter = require('./src/routers/routers.js');
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});





mongoose
  .connect('mongodb+srv://arafath5023:rockrahim@classmanagement.mry2u.mongodb.net/?retryWrites=true&w=majority&appName=classmanagement/users')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });