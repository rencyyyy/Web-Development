var changeThirdList = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Rency";
changeThirdList;

var changeButtonText = document.firstElementChild.lastElementChild.querySelector("button").innerHTML = "Don't Click me";
changeButtonText;

var changeGoogleColor = document.querySelector("#list a").style.color = "orange";
changeGoogleColor;

// This will only change the bullet point without changing thw color of the text.
document.querySelector("li").style.color = "purple";