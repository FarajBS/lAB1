// 1 //
// حساب مساحة المستطيل //
let height = 7;
let width = 3;

let rectangle = height * width;
console.log(rectangle); // = 21

// =========================================================================================================================================== //
// 2 //
// محول درجة الحرارة //
let celsius = 41; // C
let tofahrenheit = (celsius * 1.8) + 32;
console.log(tofahrenheit); // 105.8 F

let fahrenheit = 105.8; 
let tocelsius = (fahrenheit - 32) / 1.8;
console.log(tocelsius); // 41 C 

// =========================================================================================================================================== //
// 3 //
// من ساعه الى ثانيه //
let hour = 12; // h

let second = hour * 3600; // 43,200 s
console.log(second) 

// =========================================================================================================================================== //
// 4 //
// Concatenation //
let fname = "Faraj";
let lname = "Saad";

console.log(fname + " " + lname);

// =========================================================================================================================================== //
// 5 //
// Total bill //
var bill = 10.25 + 3.99 + 7.15;

var tip = 0.15 * bill;

var total = bill + tip;
console.log(total);

// =========================================================================================================================================== //
// 6 //
// Mad Libs //
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!"
console.log(madLib);

// =========================================================================================================================================== //
// 7 //
// Awesome Message //
let firstName = "Julia";
let interest = "cats"; 
let hobby = "play video games";

let awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + "."
console.log(awesomeMessage);