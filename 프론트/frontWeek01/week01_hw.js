const drinks = [
    {name: "콜라", price:4000}, 
    {name: "사이다", price:4500}, 
    {name: "파워에이드", price:6000}, 
    {name: "포카리", price:7000}, 
    {name: "오렌지주스", price:8500},
    {name: "박카스", price: 3000}
];
let money = 15000;

function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}

function selectDrink(n) {
    const drink_name = drinks[n].name;
    const drink_price = drinks[n].price;

    if (money >= drink_price) {
        money -= drink_price;
        console.log(`${drink_name} 음료가 나왔어요! (가격: ${drink_price}원)`);
        console.log(`지갑에 남은 돈: ${money}원`);
    } else {
        console.log("돈이 부족해요! 음료를 살 수 없어요!");
    }
}

function buyDrink() {
    console.log("<랜덤 음료 자판기>");
    for (var i = 1; i <= 3; i++) {
        const index = getRandom(drinks);
        selectDrink(index);
        console.log("------------------------------------");
    }
}

buyDrink();