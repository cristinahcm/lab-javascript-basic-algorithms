// Iteration 1: Names and Input
//Create a variable `hacker1` with the driver's name.
const hacker1 = "Cristina";
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Fernando";
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log("Hello")
//2.1. Depending on which name is longer, print:
if (hacker1.length < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

const hacker1Split = hacker1.split("");
const hacker1Space = hacker1Split.join(" ");
const hacker1Capital = hacker1Space.toUpperCase();

console.log(hacker1Capital);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

const hacker2Split = hacker2.split("");
const hacker2Reverse = hacker2Split.reverse();
const hacker2Join = reverseHacker2.join("")

console.log(hacker2Join)

//3.3 Depending on the lexicographic order of the strings, print:



