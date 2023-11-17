// index.js - This is an experiment js file
// Author: Jazmine Noguera
// Date: November 2023

console.log("Javascript is working!");

$("#my-button").click(function(){
    console.log("Button clicked!");
    var name = prompt("What is your name?");
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#h1").html(newText);
});