// index.js - The purpose of this lab is experiment with functions.
// Author: Jazmine Noguera
// Date: November 1, 2023

//str = "What's your name?"
//str.split("")
//splitStr = str.split("") 
//splitStr.join("")
//splitStr.reversesort()

// sort UserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can change it!");
  console.log("userName =", userName);

  // Convert the user's name to lowercase and split it into an array of characters
  var nameArray = userName.toLowerCase().split('');
  console.log("nameArray =", nameArray);

  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // Join the sorted array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}
//output
document.writeln("Here is your New and Improved name!: ",
  sortUserName(), "</br>");