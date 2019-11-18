// Write your solution here!
let pets = ["Milo", "Otis", "Garfield"];

let append = pets.slice(0);
append.push("Odie");

let prepend = pets.slice(0);
prepend.unshift("Odie");

let removeLast = pets.slice(0);
removeLast.pop();

let removeFirst = pets.slice(0);
removeFirst.shift();
