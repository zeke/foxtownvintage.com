require("dotenv").load()

var express = require("express")
var etsy = require("./lib/etsy").new(process.env.OAUTH_CONSUMER_KEY)
var shop = require("./shop.json")
var app = express()

app.get('/', function(req, res){
  res.json(listings)
})

var listings = []
var listings_path = "/shops/" + shop.shop_id + "/listings/active"
var listing_options = {
	fields: "title,description,url,price,listing_id",
	limit: 100,
	includes: "Images"
}

etsy.get(listings_path, listing_options, function(err, res) {
	if (err) throw (err)
	listings = res
	app.listen((process.env.PORT || 5000), function(){
		console.log("app is ready")
	})
})
