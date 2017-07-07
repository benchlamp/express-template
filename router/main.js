var mongoose = require("mongoose"),
    UserUrl = require("../models/UserUrl");



module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index.html")
    });
    
    
    
    app.post("/submit", function(req, res) {

        //var userUrl = new UserUrl({
        //    url: req.body.userUrl
        //})
        
        //userUrl.save(function(err) {
        //    if (err) return console.log(err);
        //})
        
        res.send("POST request received");    
        
    })
    

}