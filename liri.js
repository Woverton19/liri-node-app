// console.log("I'm Batman");
var Twitter = require('twitter');
var Spotify = require('spotify');
var request = require('request');
var Key = require('./keys.js');
var fs = require('fs');
var client = new Twitter(Key);


function watch(command, action){
    switch(command){
        case 'my-tweets': twitter(action); break;
        case 'spotify-this-song': spotify(action); break;
        case 'movie-this': omdB(action); break;
        case 'do-what-it-says': doWhatISay(); break;
        default: console.log("\n You did something wrong\n");
    }
}
// This brings in the Twitter API and logs tweets
function twitter(name){
    if (!name){
        name = 'blackhaze19' ;
    }
    var params = { screen_name: name};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("\n" + tweets[i].text + "\n");
            }
            // console.log(tweets.text);
        } else {
            throw error
        }
    }); 
}; 
// This brings in the Request API and calls for the omdb API for movie
function omdB(movie){
    if(!movie){
        movie = 'Mr. Nobody'
        request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
        if(!error && response.statusCode == 200) {
            var movieData = JSON.parse(body)
            console.log("\n---------------------\n");
            console.log("Title: " + movieData.Title);
            console.log("Starring: " + movieData.Actors + "\n");
            console.log("Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Country: " + movieData.Country + "\n");
            console.log("Plot: " + movieData.Plot + "\n");   
            console.log("Tomato Score: " + movieData.tomatoUserMeter);
            console.log("Tomato URL: " + movieData.tomatoURL + "\n");
            console.log(" Netflix and Chill?");
            console.log("\n---------------------\n");
        } else {
            console.log('Error occurred' + error);
        }
    });
        
    } else {
        request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
            if(!error && response.statusCode == 200) {
                var movieData = JSON.parse(body);
            console.log("\n---------------------\n");
            console.log("Title: " + movieData.Title);
            console.log("Starring: " + movieData.Actors + "\n");
            console.log("Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Country: " + movieData.Country + "\n");
            console.log("Plot: " + movieData.Plot + "\n");   
            console.log("Tomato Score: " + movieData.tomatoUserMeter);
            console.log("Tomato URL: " + movieData.tomatoURL + "\n");
            console.log(" Netflix and Chill?");
            console.log("\n---------------------\n");
            } else {
                console.log('Error occurred' + error);

            }
        });
    }
}
 // This brings in the spotify API and logs songs
function spotify(song){
    if (!song) {
        song = 'Whats my age again';
    };

    var spotify = require('spotify');
     
    spotify.search({type: 'track', query: song}, function(err, data) {
        if (!err) {
            for (var i = 0; i < 10; i++) {
                if (data.tracks.items[i] != undefined) {
                    console.log("\n---------------------\n");
                    console.log('Artist: ' + data.tracks.items[i].artists[0].name)//Artist name
                    console.log('Song: ' + data.tracks.items[i].name)//Song name
                    console.log('Album: ' + data.tracks.items[i].album.name)//Album name
                    console.log('Preview Url: ' + data.tracks.items[i].preview_url)//Preview URL
                    console.log("\n---------------------\n");
                };
            };


        } else {
            console.log('Error occurred: ' + err);
        
        };
    });
};
// Reads text file
function doWhatISay(){
    fs.readFile("liri-node-app/random.txt", 'utf8', function(error, data){
        if (!error) {
            doArray = data.split(',');
            watch(doArray[0], doArray[1]);
        } else {
            console.log('Error occurred' + error);
        }
    });
};

// Logs to text file

    
    fs.appendFile("liri-node-app/log.txt", data, 'utf8', function(error) {
        if (error) {
            console.log('Error occurred' + error);
        }
    })


watch(process.argv[2], process.argv[3]);