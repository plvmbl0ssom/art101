// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 9, 2023

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Toggle Highlight</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#problems").toggleClass("highlight");
});

// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Toggle Highlight</button>");

// add a click listener to the reflection button
$("#button-reflection").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#reflection").toggleClass("highlight");
});

// add button to results section
$("#results").append("<button id='button-results'>Toggle Highlight</button>");

// add a click listener to the results button
$("#button-results").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#results").toggleClass("highlight");
});