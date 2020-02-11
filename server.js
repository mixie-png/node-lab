"use strict";
const http = require("http");
const quotesModule = require("./quotes-module");
const {quotes} = require("./quotes-module");

// console.log(quotesModule.quotes[random]);

http.createServer((req, res) => {
    let random = Math.floor(Math.random() * quotes.length);
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(quotesModule.quotes[random]);
    res.end();
  }).listen(3000);
