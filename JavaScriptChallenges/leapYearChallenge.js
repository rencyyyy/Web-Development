function isleap(enterYear) {
    if (enterYear % 4 === 0) {
        if (enterYear % 100 === 0){
            if (enterYear % 400 === 0) {
                console.log(enterYear + " is a leap year");
            } else {
                console.log(enterYear + " is not a leap year");
            }
        } else {
            console.log(enterYear + " is a leap year");
        }
    } else {
        console.log(enterYear + " is not a leap year");
    }
}

isleap(2002);
