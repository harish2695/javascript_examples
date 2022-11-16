const express = require('express');
const app = express();
const port = 3000;
const promise = require("./recursion.js")

const a = () => {
  console.log("HHSHHD")
}

app.get('/', (req, res) => {
  a()
  return res.send("Hello javascript <h1>hello</h1> <script src='/Users/apple/javascript/demo/recursion.js' type='text/javascript'></script>")
  // return res.sendFile('/Users/apple/javascript/demo/recursion.js')

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});