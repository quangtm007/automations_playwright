const _ = require('lodash');

let arr = [1, 2, 3, 4, 5];
let shuffled = _.shuffle(arr);

console.log("Original:", arr);
console.log("Shuffled:", shuffled);
console.log("Sum:", _.sum(arr));
console.log("Max_Number:", _.max(arr));