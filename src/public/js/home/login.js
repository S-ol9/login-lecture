"user strict";

const id = document.querySelector("#id"), // 태그명이랑 속성 값이 같으면 안 되므로 앞에 # 추가
    psword = document.querySelector("#psword"), // 그냥 쓰면 태그면 속성 값은 # 붙여서
    loginBtn = document.querySelector("button"); // button은 태그 그대로

loginBtn.addEventListener("click", login);

function login() {
    const req = { // 오브젝트는 값을 넣어줄 때 키, 값 형태로
        id: id.value,
        psword: psword.value,
    };

    console.log(req);

};