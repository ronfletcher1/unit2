console.log("Hello World!");
console.log("HI!");
console.log("Hello");

var ron = "hello";
if (ron == "hellosie") {
    console.log("i think we're getting it");
} else if (ron = "hello"){
    console.log("ron is the man")
}

/* while loops while (condition t or f) */
var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter = counter + 1;
}

console.log("we're done with this while loop")

var string = "";
while (string != "aaaaa") {
    console.log(string)
    string = string + "a";

}
var array = [];
while (array.length < 5) {
    array.push("Ron");
    console.log(array)
}

// * for loops
for (var i=0; i<10; i = i + 1){
    console.log("I'm in a for loop")
}

// functions
function ronsfunc(workday) {
    console.log(workday)
}
ronsfunc("this is crazyyyy");

// anonymous functions
var anonFunction = function (){
    console.log("anonymous");
}
anonFunction();

// reverse 
var ronsArray = ["a", "b", "c", "d"];

var reversed = [];

while (ronsArray.length > 0) {
    var popped = ronsArray.pop();
    reversed.push(popped);

    // reversed.push(adamsArray.pop());
}

console.log(reversed);