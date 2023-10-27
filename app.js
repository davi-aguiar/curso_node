const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world")
});

app.listen(8080, function () {
  console.log("Server running")
});

app.get("/user", function (req, res) {
  res.send({
    nome: "Davi"
  })
});

app.delete("/user", function (req, res) {
  res.send({
    nome: "o usuário: Davi foi deletado"
  })
})