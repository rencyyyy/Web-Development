var killers = ["Angela","Rency","Jose","Pedro","Gharawi"];

function whoKilled(killers) {
    
    var numbersOfKillers = killers.length;
    var getSuspect = Math.floor(Math.random() * numbersOfKillers);
    return killers[getSuspect] + " killed the victim!";
}

console.log(whoKilled(killers));