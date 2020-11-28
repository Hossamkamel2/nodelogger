const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const logs=require("./routes/log");
const helmet=require("helmet");

mongoose
  .connect(process.env.MONGODB_URI||"mongodb://localhost/weatherlogs")
  .then(() => console.log("connected to mongo DB..."))
  .catch(() => console.log("COULDNOT connect to mongo DB..."));


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(express.json());

app.use("/api/logs",logs);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}....`));
