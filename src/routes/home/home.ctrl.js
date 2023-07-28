"use strict"

const users = {
    id: ["jinsol", "이진솔", "어피치"],
    psword: ["123", "1234", "12345"],
}

const output = {
    hello: (req, res) => {
        res.render("home/index"); // render는 알아서 views 파일 읽음
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id); //idx의 인덱스 가져오기
            if(users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    },
};


module.exports = { output, process };