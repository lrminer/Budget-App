// select field to query by

// create get request using the created path

// send file to query api route
    // create query api route

// get data from api request in query.js

// send this data to the pie chart

// send this data to bar chart




$("#search-btn").on("click", function(event) {
    event.preventDefault();
  
    var bookSearched = $("#book-search").val().trim();
  
    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/budget?" + bookSearched, function(data) {
  
      console.log(data);
  
    });
  
  });