// lab.js - Experimenting with jQuery and AJAX
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: December 2, 2023

//attach click action to button
$('#activate').click(function(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://swapi.dev/api/films/1/",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "ssh-ed25519AAAAC3NzaC1lZDI1NTE5AAAAIFgtjhIzvjsTy1/WceCy52BSFH0PoCNTCbZHM1QEYLh1ucsc63-1701568233",
          },
    // Whether this is a POST or GET request
    type: "GET",
    app: "swapi",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
   success: function(data) {
        // do stuff
        console.log(data);
    var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    $("#title").html(data.title)
        $("#output").append("<p>" + data.episode_id);
        $("#output").append("<p>" + data.opening_crawl);
        $("#output").append("<p>" + data.director);
        $("#output").append("<p>" + data.producer);
        $("#output").append("<p>" + data.release_date);

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
})