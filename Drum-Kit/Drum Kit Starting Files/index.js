
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
        alert("Hello World!");
    });
}