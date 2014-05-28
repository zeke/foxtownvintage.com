require("dotenv").load()

var express = require("express")
var harp = require("harp")
var etsy = require("./lib/etsy").new(process.env.OAUTH_CONSUMER_KEY)


var Etsy = require("./lib/etsy")
var etsy = Etsy.new(process.env.OAUTH_CONSUMER_KEY)

var shop = require("./lib/shop.json")
var listings = []

var app = express()
app.use(express.static(__dirname + "/public"))
app.use(harp.mount(__dirname + "/public"))
app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'jade')

app.get('/', function(req, res){
  // res.json(listings)
  res.render('index', {
    listings: listings
  })
})

etsy.getActiveListingsForShop(shop.shop_id, function(err, res) {
	if (err) throw (err)
	listings = res
  app.listen(app.get('port'), function() {
    console.log("app is running at localhost:" + app.get('port'))
	})
})
