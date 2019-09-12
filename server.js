const express = require("express");

const connectDB = require("./config/db");
const app = express();
//connect our database (mongoDB)
connectDB();
app.get("/", (req, res) => res.send("API RUNING"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
