// var heading = document.querySelector("h1");
// var diceOne = document.querySelectorAll(".dice img")[0].classList.add("random-dice1");
// var diceTwo = document.querySelectorAll(".dice img")[1].classList.add("random-dice2");

// function randomDiceOne() {
//     diceOne = Math.random();
//     diceOne = diceOne * 6;
//     diceOne = Math.floor(diceOne) + 1;

//     if (diceOne === 1){
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice1.png");
//     } else if (diceOne === 2) {
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice2.png");
//     } else if (diceOne === 3) {
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice3.png");
//     } else if (diceOne === 4) {
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice4.png");
//     } else if (diceOne === 5) {
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice5.png");
//     } else if (diceOne === 6) {
//         return diceOne = document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice6.png");
//     }

// }

// function randomDiceTwo() {
//     diceTwo = Math.random();
//     diceTwo = diceTwo * 6;
//     diceTwo = Math.floor(diceTwo) + 1;

//     if (diceTwo === 1){
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice1.png");
//     } else if (diceTwo === 2) {
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice2.png");
//     } else if (diceTwo === 3) {
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice3.png");
//     } else if (diceTwo === 4) {
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice4.png");
//     } else if (diceTwo === 5) {
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice5.png");
//     } else if (diceTwo === 6) {
//         return diceTwo = document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice6.png");
//     }

// }

// var diceOneFunc = randomDiceOne();
// var diceTwoFunc = randomDiceTwo();


var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

var diceOne = 0;
var diceTwo = 0;

if (randomNumber1 === 1){
    randomNumber1 = document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice1.png");
    diceOne = 1;
} else if (randomNumber1 === 2) {
    randomNumber1 = document.querySelectorAll(".dice img1")[0].setAttribute("src", "./images/dice2.png");
    diceOne = 2;
} else if (randomNumber1 === 3) {
    randomNumber1 = document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice3.png");
    diceOne = 3;
} else if (randomNumber1 === 4) {
    randomNumber1 = document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice4.png");
    diceOne = 4;
} else if (randomNumber1 === 5) {
    randomNumber1 = document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice5.png");
    diceOne = 5;
} else if (randomNumber1 === 6) {
    randomNumber1 = document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice6.png");
    diceOne = 6;
}

if (randomNumber2 === 1){
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice1.png");
    diceTwo = 1;
} else if (randomNumber2 === 2) {
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice2.png");
    diceTwo = 2;
} else if (randomNumber2 === 3) {
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice3.png");
    diceTwo = 3;
} else if (randomNumber2 === 4) {
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice4.png");
    diceTwo = 4;
} else if (randomNumber2 === 5) {
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice5.png");
    diceTwo = 5;
} else if (randomNumber2 === 6) {
    randomNumber2 = document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice6.png");
    diceTwo = 6;
}

if (diceOne === 6 && diceTwo === 6) {
    heading = document.querySelector("h1").innerHTML = "Draw!";
} else if (diceOne > diceTwo) {
    heading = document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (diceOne < diceTwo) {
    heading = document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (diceOne === diceTwo) {
    heading = document.querySelector("h1").textContent = "Draw!";
}






