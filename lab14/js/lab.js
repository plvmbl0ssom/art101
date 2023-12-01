// lab.js - Using a function to experiment with loops.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 26, 2023

// chatgpt
var str = "";
function fizzBuzzBoom() {
    // print all the numbers from 1 to 200.
    for (let i = 1; i <= 200; i++ ) {

    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.
    // For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (index % 15 == 0) {
      str += "FizzBuzz!"<br>
      $("#output").append("<p>" + str + "</p>");
    }
    
    if (index % 21 == 0) {
        str += "FizzBoom!"<br>
        $("#output").append("<p>" + str + "</p>");
    }
    
    if (index % 35 == 0) {
        str += "BuzzBoom!"<br>
        $("#output").append("<p>" + str + "</p>");
      }

  if (str === ""){
    str = i;
  }
    // if the number is a multiple of 3,
    // print "Fizz" instead of the number
    else if (index % 3 == 0) {
        str += "Fizz!"<br>
        $("#output").append("<p>" + str + "</p>");

    }
    
    // if the number is a multiple of 5,
    // print "Buzz" instead of the number 
    else if (index % 5 == 0) {
        str += "Buzz!"<br>
        $("#output").append("<p>" + str + "</p>");
    }
    // if the number is a multiple of 7,
    // print "Boom" instead of the number
    else if (index % 7 == 0) {
        str += "Boom!"<br>
        $("#output").append("<p>" + str + "</p>");
    }
    
    // otherwise print the number
    else {
        str += index<br>
        $("#output").append("<p>" + str + "</p>");
    }}
    
};
    