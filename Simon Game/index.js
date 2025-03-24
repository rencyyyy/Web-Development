
var buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(50).fadeIn(100);

    var buttonSound = new Audio("sounds/" + randomChosenColour + ".mp3");
    buttonSound.play();
}
nextSequence();









