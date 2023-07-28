"use strict";

 class UserStorage {
    static #users = { // 변수에 직접 접근하고자 할 때는 static 선언
        // 변수 앞에 #을 붙여 은닉화
        id: ["jinsol", "이진솔", "어피치"],
        psword: ["123", "1234", "12345"],
        name: ["이", "진", "솔"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
            // newUsers는 배열의 초깃값이 들어감.
            // 다음 변수부터는 field에 들어감.
        }, {});
        return newUsers;
    }
 }

 module.exports = UserStorage;