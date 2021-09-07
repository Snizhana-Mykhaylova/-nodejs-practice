const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const { postsRouter } = require("./routers/postsRouter");

app.use(express.json());
app.use("/api/posts", postsRouter);
app.use(morgan("tiny"));

const PORT = process.env.PORT || 8081;

app.listen(PORT, (err) => {
  if (err) {
    console(err);
  }
  console.log("server is runing");
});
