"use strict"

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");


const output = {
    hello: (req, res) => {
        res.render("home/index"); // render는 알아서 views 파일 읽음
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response); // json으로 만들어서 클라이언트에게 던지기
        // return res.json(response);

        // console.log(req.body);
        // const id = req.body.id,
        //     psword = req.body.psword;
        // // const userStorage = new UserStorage();
        // // 데이터를 저장하고 있는 인스턴스는 굳이 인스턴스화 안해도 된다.
        // const users = UserStorage.getUsers("id", "psword");
        // const response = {};
        // if(users.id.includes(id)) {
        //     const idx = users.id.indexOf(id); //idx의 인덱스 가져오기
        //     if(users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        
        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다."
        // return res.json(response);
    },
};


module.exports = { output, process };