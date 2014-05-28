var superagent = require("superagent")
var url = require("url")
var merge = require("merge")

var Etsy = module.exports = (function() {

  function Etsy(token) {
    this.token = token

    return this
  }

  Etsy.prototype.get = function(path, query, cb) {

    var request_url = url.format({
      protocol: "https",
      hostname: "openapi.etsy.com",
      pathname: "/v2" + path,
      query: merge({api_key: this.token}, query)
    })

    // console.log(request_url)

    superagent
      .get(request_url)
      .end(function(err, res) {
        if (err) return cb(err)
        return cb(null, res.body)
      })
  }


  Etsy.prototype.getActiveListingsForShop = function(shop_id, cb) {
    var listings_path = "/shops/" + shop_id + "/listings/active"
    var listing_options = {
      fields: "title,description,url,price,listing_id",
      limit: 100,
      includes: "Images"
    }

    this.get(listings_path, listing_options, function(err, res) {
      if (err) return cb(err)
      return cb(null, res.results)
    })

  }

  Etsy.new = function(raw) {
    return new Etsy(raw)
  }

  return Etsy

})()
