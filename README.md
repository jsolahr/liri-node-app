# liri-node-app


LIRI is a Node.JS based application. It is simliar to iPhone's SIRI, except it takes in commands through typing vs speech. This a command line node app that takes in parameters and returns data based on one of four commands:

1. concert-this 
2. movie-this 
3. spotify-this-song
4. do-what-it-says 
  
  This app can search Spotify for songs, Bands in Town for concerts,  OMDB for movies and read text from a random.txt file. 

How to get started! 

Clone the repository and do the following" "

1. Run npm install, and the following packages should be installed:

2. Node-Spotify-API

3. Axios : This module will be used to get the IMDB and BandsInTown API data

4. DotEnv

Create a .env file in the same directory as the rest of the files. In the .env file should be:

'# Spotify API keys'

'SPOTIFY_ID=your-spotify-ID-here'

'SPOTIFY_SECRET=your-spotify-secret-here'

Also add a song name to your random.txt like this ex. ("I Want it Take Way")


How to run commands from the CLI"

1. node liri.js concert-this [band name];

2. node liri.js spotify-this-song [song name];

3. node liri.js movie-this [movie name];

4. do-what-it-says  

