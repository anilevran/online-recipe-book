const express = require("express");
const dotenv = require("dotenv").config({path: __dirname + "\\.env"});;
const homeRouter = require("./routes/Home");
const blogRouter = require("./routes/Blog");
const userRouter = require("./routes/User");
const recipesRouter = require("./routes/Recipes");
const cors = require("cors");

const PORT = process.env.PORT || 9001;

const app = express();
app.use(cors());
app.get("/",homeRouter);
app.get("/Blog",blogRouter);
app.use("/User",userRouter);
app.use("/Recipes",recipesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
