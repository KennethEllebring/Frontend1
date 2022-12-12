// app.js                         // not used
// import { add } from './data';  // not used

const prompt = require('prompt-sync')();

// Deklarera variabler
const name = prompt("Hello user, what is your name? ");    
let age = prompt("How old are you? ");          
console.log("So your name is " + name + ", and ");
console.log(`You are ${age} years old!`);
// Just some code from first lesson, using diffrent var/let/const types and console log with backticks