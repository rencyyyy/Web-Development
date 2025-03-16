
// 1) Creating variable for number of drum buttons & creating a seperate function for the parameter of addEventListener

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", drumClicked);
// }

// function drumClicked() {
//     alert("I got clicked");
// }

// 2) Creating a for loop ranging i to the length if the .drum class element and creating a ghost function for the eventListener for click button 

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;
        default: console.log(buttonInnerHTML);
    }

    });
}


// var audio = new Audio("./sounds/crash.mp3");
//         return audio.play();

// var buttonColor = this.style.color;
    // this.style.color = "white";
    // setTimeout(() => {
    //     this.style.color = buttonColor; // Revert to the original color after 0.5s
    // }, 200);


