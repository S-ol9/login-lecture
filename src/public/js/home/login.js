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

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) //  서버에서 응답한 데이터를 받기 위함
        .then((res) => {
            console.log(res);
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
            alert(new Error("로그인 중 에러 발생"));
        });
        // then(console.log); 로 res 인자값을 없애고 쓸 수 있음 (같다면)
    // res.json()의 반환 값은 Promise
    // 기본 res의 반환 값은 Response 스트림인데,
    // .json() 메소드를 통해 Response(응답) 스트림을 읽을 수 있다.
    // Response는 데이터가 모두 받아진 상태가 아니다.
    // .json()으로 Response 스트림을 가져와 완료될 때까지 읽는다.
    // 다 읽은 body의 텍스트를 Promise 형태로 반환한다.
};