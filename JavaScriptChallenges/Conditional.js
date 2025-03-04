var yourName = prompt("Enter your name");
var crushName = prompt("Enter your crush name");

var lovePercentage = Math.random();
lovePercentage = lovePercentage * 100;

if (lovePercentage === 100) {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You are meant for each other.");
} else if (lovePercentage >= 80 && lovePercentage <= 99) {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You have a high chance of being perfect for each other.");
} else if (lovePercentage >= 50 && lovePercentage <= 79) {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You have a good chance of being perfect for each other.");
} else if (lovePercentage <= 49 && lovePercentage >= 20) {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You have a low chance of being perfect for each other.");
} else if (lovePercentage <= 19 && lovePercentage >= 10) {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You have a very low chance of being perfect for each other.");
} else {
    alert(yourName + ", You have " + Math.round(lovePercentage) + "% chance to be with " + crushName + ". You have no chance of being perfect for each other.");
}
