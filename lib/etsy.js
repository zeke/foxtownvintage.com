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

    console.log(request_url)

    superagent
      .get(request_url)
      .end(function(err, res) {
        if (err) return cb(err)
        return cb(null, res.body.results)
      })
  }

  Etsy.new = function(raw) {
    return new Etsy(raw)
  }

  return Etsy

})()
