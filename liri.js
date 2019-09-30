
require("dotenv").config();

//Require NPM Installs 
var fs = require("fs");
var keys = require("./keys.js");
var axios = require ("axios");
var Spotify = require("node-spotify-api");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var parameter = process.argv.slice(3).join(" ");


//Main Function for Commands
function switchCase() {
    switch (command) {

        case "concert-this":
            bandsInTown(parameter);
            break;

        case "spotify-this-song":
            song(parameter);
            break;

        case "movie-this":
            movieInfo(parameter);
            break;

        case "do-what-it-says":
            random();
            break;
    }
}

///Function for Searching Bands in Town////
function bandsInTown(){
    if (command === "concert-this"){
        var artist = parameter;
    }

  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response) {

    console.log("Artist: " + artist);
    console.log("Venue Name: " + JSON.stringify(response.data[0].venue.name));
    console.log("City Name: " + JSON.stringify(response.data[0].venue.city));
    console.log("Date: " + JSON.stringify(response.data[0].datetime));

   })
  .catch(function(error) {
    if (error.response) {

    } else if (error.request) {

      console.log(error.request);

    } else { 
      console.log("No data to return");
    }
    console.log(error.config);
})
}

////Function for Searching a Movie///////
function movieInfo() {
  if (command === "movie-this"){
    var movieName = parameter;
    console.log(movieName);
    } 
   if (movieName === "") {
      movieName = "Mr.Nobody";
    }
    else {
    }

  axios.get("http://www.omdbapi.com/?t=" + movieName +"&y=&plot=short&apikey=trilogy").then(
   
    function(response) {
      console.log("Movie Title: " + response.data.Title);
      console.log("Movie Rating " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country Origin: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);

    })
    .catch(function(error) {
      if (error.response) {
      
      } else if (error.request) {
      
        console.log(error.request);

      } else {
        console.log("No data to return", error.message);
      }
      console.log(error.config);
    });
  
  }

  switchCase();

