const date = new Date();

y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();

h = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();

console.log(`${y}년 ${m}월 ${d}일`);
console.log(`${h}시 ${min}분 ${sec}초`);