"use strict"
const hello = (req, res) => {
    res.render("home/index"); // render는 알아서 views 파일 읽음
}; // 콜백 함수

const login =  (req, res) => {
    res.render("home/login");
};


module.exports = { hello, login };