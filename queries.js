var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({ 'name' : 'Library West' }).exec(function(err, listing) {
    if (err) throw err;
    console.log(listing);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOne({ 'code' : 'CABL'}).exec(function(err, listing) {
    if (err) throw err;
    
    console.log(listing);
    
    listing.remove(function(err) {
      if (err) throw err;
    });
  });
};


var updatePhelpsLab = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var correctAddress = '686 Museum Rd. Gainesville, FL 32603, United States';
  
  Listing.findOne({ 'name' : 'Phelps Laboratory'}).exec(function(err, listing) {
    if (err) throw err;
    
    if(listing.address != correctAddress) {
      listing.address = correctAddress;
    }
    
    listing.save(function(err) {
      if (err) throw err;
      
      console.log(listing);
    });
  });
};


var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find().exec(function(err, listing) {
    if (err) throw err;
    console.log(listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
