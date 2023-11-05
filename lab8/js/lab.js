// index.js - The purpose of this lab is to experiment with anonymous functions as well as callbacks.
// Author: Jazmine Noguera
// Date: November 4, 2023

function add20(x) {
  var results = x + 20;
  return results;
}

// test function
console.log("What's 50 + 20? ", add20(50));
console.log("What's 26 + 20?", add20(26));
console.log("What's 67 + 20?", add20(67));

var array = [11, 15, 60, 33, 57800, 9000, 4987]
console.log("My array", array);

var result = array.map(add20);
// should return [31, 35, 80, 53, 57820, 9020, 5007]
console.log("Test of numbers in array added to 20:", result);

var result = array.map(function(x){
  return x * 16;
})

// should return [176, 240, 960, 528, 924800, 144000, 79792]
console.log("Array multiplied by 16:", result);