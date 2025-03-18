function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function (){
        console.log("Cleaning in progress...")
    }
}

var bellBoy1 = new BellBoy("Rency",22, true, ["Filipino","English"]);

console.log(bellBoy1.name);
console.log(bellBoy1.age);
console.log(bellBoy1.hasWorkPermit);
console.log(bellBoy1.languages[0]);
console.log(bellBoy1.clean());