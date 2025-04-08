let first = "chae-bin";
let last = "Lee";

console.log(`My name is ${first} ${last}.
    I'm ${20+3} years old`)

let likelion = "likelion";
likelion = null;
console.log(likelion);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

daysOfWeek.push("sun");
console.log(daysOfWeek);

const my = {
    name: "chaebin",
    age:22,
    major:"Eng",
    tired: true,
};

console.log(my);
my.age = 20;
my.hungry = true;

console.log(my);

console.log(5 == "5");
console.log(5 === "5");

let x = 10;

let result = x % 2 ? "홀수" : "짝수";
console.log(result);

/*
id = prompt("아이디를 입력해주세요.");
password = prompt("비밀번호를 입력해주세요.");
if (id == "likelion" && password == "1234") {
    alert("인증에 성공했습니다.");
} else {
    alert("인증에 실패했습니다.");
}
*/

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

const person = {
    name: "Lee",
    address: "Seoul",
};

for (const key in person) {
    console.log(key + ":" + person[key]);
}

function multiply1(x, y) {
    return x * y;
}

const result1 = multiply1(2, 4);
console.log(result1);

const multiply2 = (x, y) => {
    return x * y;
};

console.log(multiply2(2, 4));


const multiplyAll = (...args) => {
    return args.reduce((a,b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5));

const numbers = [1, 2, 3];
const pows = [];

numbers.forEach((item) => pows.push(item ** 2));
console.log(pows);