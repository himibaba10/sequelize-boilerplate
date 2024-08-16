const express = require("express");
const sequelize = require("./utils/database");

const app = express();

app.get("/", (req, res, next) => {
  res.send("This is a sequelize boilerplate");
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("The server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
