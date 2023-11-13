// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 12, 2023

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// Hint 1: If you give all three sections a class (".minor-section"), you can add a button to all three in one jQuery selector and method call.
// Hint 2: If you use a jQuery selector that selects all three new buttons, you can attach an event listener to all three at the same time 
$(".minor-section").append("<button id='minor-section button'>Toggle Highlight</button>");

// TASK X
// Hint 3: Within a jQuery callback the keyword $(this) refers to the thing being selected. The jQuery
// method .parent() selects the parent of the selected element.
// So within the callback, we can use $(this).parent() to select the section that the button is in!
$(".minor-section button").click(function(){
    $(this).parent().toggleClass("highlight");
})