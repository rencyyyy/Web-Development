function getMilk(money){
    console.log("Pick up money");
    console.log("Go to store");
    alert("You bought " + calcBottle(money, 1.5) + " bottles of milk.");
    console.log("Go to home");
    return calcChange(money, 1.5);
}

function calcBottle(startingMoney, costPerBottle) {
    var numOfBottles = Math.floor(startingMoney / costPerBottle);
    return numOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

alert("Your have " + getMilk(5) + " change.");

// or change the fix price of bottle 1.5 into -> costPerbottle 
