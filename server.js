const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
  res.send("Hello World!");
});

app.get("/overview", (req,res)=>{
  res.send(`welcome to the overview page`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});