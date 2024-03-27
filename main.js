// main.js
"use strict";

const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const routes = require('./router'); // router 모듈을 require
const contentTypes = require('./content-types');
const utils = require('./utils');

// Get 라우트
routes.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res); // "index.html"로 수정
});

routes.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

routes.post("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// POST 라우트
routes.post("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// CSS 에셋 라우트
routes.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
routes.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});

// JS 에셋 라우트
// JPG 에셋 라우트
routes.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, { 'Content-Type': 'image/jpeg' }); // MIME 유형 수정
    utils.getFile("public/img/product.jpg", res);
});

// PNG 에셋 라우트
routes.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, { 'Content-Type': 'image/png' }); // MIME 유형 수정
    utils.getFile("public/img/graph.png", res);
});

const port = 3000;
http.createServer(routes.handle).listen(port); // routes.handle로 수정
console.log(`Server at: http://localhost:${port}`);
