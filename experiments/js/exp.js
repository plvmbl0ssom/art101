// index.js - This is an experiment js file
// Author: Jazmine Noguera
// Date: November 2023

console.log("Javascript is working!");

$("#my-button").click(function(){
    // console.log("Button clicked!");
    // var name = prompt("What is your name?");

    var name = $("#input").val()

    console.log("Prompt returned: " + name);

    newText = "Hello " + name + "!";
    $("#title").html(newText);
});