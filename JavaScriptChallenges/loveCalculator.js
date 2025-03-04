var myName = prompt("Enter your name");
var personName = prompt("Enter your crush name");

var lovePercentage = Math.random();
lovePercentage = lovePercentage * 100;
alert(myName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + personName);