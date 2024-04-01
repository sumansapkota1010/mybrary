const express = require("express");

const expressLayouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const indexRouter = require("./routes/index");

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 5500),
  () => {
    console.log("server started successfully");
  };
