function titleize(names, callback) {
    let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleized);
};

titleize(["Mary", "Brian", "Leo"], (names) => {
    names.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = [tricks]; // fixed errors on 25 and 30 by putting tricks in brackets
}

Elephant.prototype.trumpet = function() { 
    console.log(`${this.name} the elephant goes phrRRRRRRRRRR!!!!!!!!`);
};

Elephant.prototype.grow = function() {
    this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);        // this doesnt work??? error this.tricks.push is not a function
};

Elephant.prototype.play = function() {
    allTricks = Math.floor(Math.random() * this.tricks.length)
    console.log(`${this.name} is ${this.tricks[allTricks]}!`) // this is also not working and i think it is because tricks is not showing up as an array
}

e1 = new Elephant("Dumbo", 250, "flying");

e1.trumpet();
e1.grow();
e1.addTrick('flapping his big ears');
e1.play();
console.log(e1);

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`);
}

Elephant.paradeHelper(micah)