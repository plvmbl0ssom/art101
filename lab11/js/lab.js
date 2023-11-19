// lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 18, 2023

console.log("Javascript is working!");

//thanks professor modes for anagram function
function generateAnagram(inputString) {
    //Convert the input string to an array of characters
    const characters = inputString.split('');

// Shuffle the array of characters to create an anagram
for (let i = characters.length - 1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters [i]];
}

//Capitalize characters after spaces or at the beginning of the line
let capitalizeNext = true;
for (let i = 0; i < characters.length; i++) {
    if (characters[i] === ' ' || i === 0) {
        capitalizeNext = true;
    } else if (capitalizeNext) {
        characters[i] = characters[i].toUpperCase();
        capitalizeNext = false;
    }
}

 // Join the shuffled characters back into a string
 return characters.join('');
}

// click listener for button
$("#submit").click(function(){
    // console.log("Button clicked!");

    var name = $("#user-name").val()

    var anagram = generateAnagram(name);

    console.log("Prompt returned: ", anagram);

    newText = "Hello " + anagram + "!";
    $("#title").html(newText);
});