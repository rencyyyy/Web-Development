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

// Text Manipulation and the Text Content Property

document.querySelector(".btn").textContent = "Click me if you gay"; // instead of using innerHTML (will literally give you all that is inside that elements including any other html tags).

// Manipulating HTML Element's Attributes

document.querySelector("#list a").textContent = "Chat GPT"; // Changing the name of the text from it's original
document.querySelector("#list a").getAttribute("href"); // Get the FIRST attribute inside the list id because theres a lot of a anchor tag inside the #list so i only get the first one here
document.querySelector("#list a").setAttribute("href", "https://chatgpt.com/"); // Change the attributes from original (google.com) to (chatgpt.com).

document.querySelectorAll("#list a")[1].textContent = "My Linked-in"; // used querySelectorAll because i wanted to target the second anchor tag.
document.querySelectorAll("#list a")[1].setAttribute("href", "https://www.linkedin.com/in/rencyd/");
