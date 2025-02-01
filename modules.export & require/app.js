require("./xyz.js");
const { x, calculateSum } = require("./sum.js");
const { calMultiply } = require("./multiply.js");

var name = "Namaste NodeJs";

var a = 12;
var b = 54;
calMultiply(a, b);
// console.log(x);
console.log(calculateSum(a, b));