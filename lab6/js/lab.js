// index.js - The purpose of this lab is experiment with arrays and objects in JavaScript.
// Author: Jazmine Noguera
// Date: October 29, 2023

// Define Variables
myTransport = ["legs", "my housemate's car", "bus", "bike", "2018 Mercedes C Class"];

// create an object for my main ride
myMainRide = {
  make: "Mercedes",
  model:"C Class",
  color: "Black",
  year: 2018,
// we can define a function within our object (called a method)
// that uses the value of year above (using this.year)
age: function() {
  return 2023 - this.year
  }
}

// output
document.writeln("My Trip Options: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");