var guestList = ["Rency","Justine","Franco","Jeff","Aeron"];
var enterName = prompt("Enter your name");
if (guestList.includes(enterName)) {
    alert("Welcome our beloved guest");
} else {
    alert("Sorry, you're not invited");
}

