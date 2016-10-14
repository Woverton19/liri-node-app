// console.log("I'm Batman");
var Twitter = require('twitter');
var Spotify = require('spotify');
var request = require('request');
var Key = require('./keys.js');
var client = new Twitter(Key);
var agr1 = process.argv[2];
var keyWord = process.argv[3];
var wordArray = [];
for (var i = 0; i < keyWord.length; i++) {
        wordArray.push(parseFloat(keyWord[i]));
        
}

console.log(wordArray);

// if (agr1 == 'my-tweets') {
//     var params = {
//         screen_name: 'blackhaze19'};
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//         if (!error) {
//             for (var i = 0; i < tweets.length; i++) {
//                 console.log("\n" + tweets[i].text + "\n");
//             }
//             // console.log(tweets.text);
//         } else {
//             throw error
//         }
//     });
// }  else if (agr1 == 'movie-this') {
//     request('http://www.omdbapi.com/?t=' + keyWord + '&y=&plot=short&r=json', function(error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log("The movie's rating is: " + JSON.parse(body)[
//                     "imdbRating"])
//             } console.log(response);

//         });
// } else if (agr1 == 'spotify-this-song') {spotify.search({type: 'track',query: name}, function(err, data) {
//         if (err) {
//             console.log('Error occurred: ' + err);
//             return;
//         }
//         console.log(data)
//     });
// } else if (agr1 == 'do-what-it-says') {
    
// }