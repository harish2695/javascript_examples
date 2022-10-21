const express = require('express');
const app = express();
const port = 3000;
// const promise = require("./promise")

app.get('/', (req, res) => {
  return "Hello javascript"
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});