// lab.js - Experimenting with jQuery and AJAX
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: December 5, 2023

// thanks professor modes for this code:
// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
// var URLpre = "https://xkcd.com/";
// var URLpost = "info.0.json";

const comicObj = {
"month": "1",
"num": 40,
"link": "",
"year": "2006",
"news": "",
"safeTitle": "Light",
"transcript": "[[A crowd of figures stand around in the dark. One figure is illuminated by a beam of light.]]\nIn a dark and confusing world, you burn brightly. I never feel lost.\n{{Alt-text: Like a beacon.}}",
"alt": "Like a beacon",
"img": "https://imgs.xkcd.com/comics/light.jpg",
"title": "Light",
"day": "1"
}
$.ajax(comicObj);

// function getComic(num) {
//     if (typeof num === 'undefined') {
//       numStr = "";
//     } else {
//       numStr = num.toString() + "/";
//     }
//     var ourURL = URLpre + numStr + URLpost;
//     console.log("Our new URL:", ourURL);
// }
// Using the core $.ajax() method
$('#activate').click(function(){
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/40/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log("Here's what I got:", data);
        const title = comicObj.safeTitle;
        const alt = comicObj.alt;
        const imageURL = comicObj.img;
        // jQuery is my boyfriend
        $("#output").append("<h2>" + title + "</h2>");
        $("#output)").append("<img src='"+ imageURL + "'/>");
        $("#output").append("<p>"+ alt + "</p>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
})