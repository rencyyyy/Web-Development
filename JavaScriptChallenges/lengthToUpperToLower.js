var name = prompt("Enter your name: ");
firstLetter = name.slice(0,1);
restLetters = name.slice(1,name.length);
firstCapitalLetter = firstLetter.toUpperCase();
restLowerLetters = restLetters.toLowerCase();
fullname = firstCapitalLetter + restLowerLetters;

alert("Hello, " + fullname);