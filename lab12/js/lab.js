// lab.js - Using a function to experiment with conditionals.
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 23, 2023

console.log("Learn what season you are based on your name!")

// Return winter, spring, summer, and fall
// depending on length mod 4
function sortSeason(str) {
    var len = str.length;
    var mod = len % 4;
    var season;

    if (mod == 0) {
      season = "Winter";
    }
    else if (mod == 1) {
      season = "Spring";
    }
    else if (mod == 2) {
      season = "Summer";
    }
    else if (mod == 3) {
      season = "Fall";
    }
    return season;
}

$("#button").click(function(){
 var str = $("#input").val()

 var urSzn = sortSeason(str);

 console.log("Prompt returned: " + urSzn);

 newText = "Your season is " + urSzn + "!";
 $("#title").html(newText);

});