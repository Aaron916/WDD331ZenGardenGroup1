const express = require("express");
const res = require("express/lib/response");
const app = express();
var path = require("path");

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000);
