require("dotenv").config();

//Require NPM Installs 
var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify =require("node-spotify-api");
var command = process.argv[2];
var parameter = process.argv[3];