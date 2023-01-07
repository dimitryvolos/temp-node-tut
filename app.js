const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Home page.");
  }

  if (req.url === "/about") {
    res.end("About page.");
  }

  res.end("Random page.");
});

server.listen(5000);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
