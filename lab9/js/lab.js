// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 9, 2023

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("button-challenge")

// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Add Highlight</button>");
$("button-problems")

// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Add Highlight</button>");
$("button-reflection")

// add button to results section
$("#results").append("<button id='button-results'>Add Highlight</button>");
$("button-results")