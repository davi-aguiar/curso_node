const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world ")
});

app.listen(8080, function () {
  console.log("Server running")
});

app.get("/user/:name/secondName/:secondName", function (req, res) {
  res.send({
    name: req.params.name,
    secondName: req.params.secondName
  })
});

