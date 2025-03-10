// Introduction to the Document Object Model (DOM) Challenge 1
var changeThirdList = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Rency";
changeThirdList;

var changeButtonText = document.firstElementChild.lastElementChild.querySelector("button").innerHTML = "Don't Click me";
changeButtonText;

// Selecting HTML Elements with Javascript Challenge 2
var changeGoogleColor = document.querySelector("#list a").style.color = "orange";
changeGoogleColor;

// This will only change the bullet point without changing thw color of the text.
document.querySelector("li").style.color = "purple";

// Manipulating and Changing Styles of HTML Elements with JavaScript Challenge 3
document.querySelector(".btn").style.backgroundColor = "aquamarine";

// Behavior of an element using classList ( adding particular class in an element). Changing the size of it _ toggle method
document.querySelector("h1").classList.add("huge-heading");
document.querySelector("h1").classList.toggle("huge-heading"); // If the class 'heading' is already applied then: Turn it off
document.querySelector("h1").classList.toggle("huge-heading"); // If the class 'heading' is turned off then: Apply
