var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

var options = {
  user: 'app',
  pass: 'password0'
}

mongoose.connect(config.db.uri, options);
/* Fill out these functions using Mongoose queries*/


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find().where('name').eq("Library West").exec(function(err, listings) {
    if (err) throw err;
    console.log(listings);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
