"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); //route 알아서 index.js 파일 읽음

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // 미들웨어를 등록하는 메소드

module.exports = app;