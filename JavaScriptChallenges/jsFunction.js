function myFunction() {
    console.log("Hello function");
}
myFunction();

// part2
function getMilk(money){
    console.log("Pick-up the money");
    console.log("Go to the store");
    var numOfBottles = Math.floor(money / 1.5);
    console.log("Go to home");
    console.log("The total number of bottles u bought is " + numOfBottles);
}
getMilk(5);