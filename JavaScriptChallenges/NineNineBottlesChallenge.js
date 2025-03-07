var numOfBottles = 99;

function bottleChallenge() {
    while(numOfBottles >=0){
        var bottleWord = "bottles";
        if (numOfBottles === 1) {
            var bottleWord = "bottle";
        } else if (numOfBottles === 0) {
            var bottleWord = "No more";
        }

        if (numOfBottles != 0) {
            console.log(numOfBottles + " " + bottleWord + " of beer on the wall, " + numOfBottles + " " + bottleWord + " of beer.");
            console.log("Take one down and pass it around, " + numOfBottles + " " + bottleWord + " of beer on the wall.");
        } else {
            console.log(bottleWord + " beer on the wall, " + bottleWord + " beer.");
            console.log("Take one down and pass it around, " + bottleWord + "beer on the wall.");
        }

    numOfBottles--;
    }
}

bottleChallenge();