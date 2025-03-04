function getMilk(money) {
    return money % 1.5;
}
var change = getMilk(4);

console.log(change);