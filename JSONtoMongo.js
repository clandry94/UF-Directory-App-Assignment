'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    Listings = require('./listings.json');



mongoose.connect(config.db.uri);

var listEntries = Listings["entries"]
var i = 0;
for(var key in listEntries) {
  var item = listEntries[key];
  console.log(item);
  console.log("item: " + i);
  i++;
  var place = new Listing({
    code: item.code,
    name: item.name,
    address: item.address
  });
  
  place.save(function(err) {
    if (err) throw err;
  });
  
}

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
