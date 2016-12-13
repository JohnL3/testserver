var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Drinks = require('../models/drinks');

var drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());



drinkRouter.route('/')
.get(function (req, res, next) {
    Drinks.find({}, function (err, drink) {
        if (err) throw err;
        res.json(drink);
    });
})

.post(function (req, res, next) {
    Drinks.create(req.body, function (err, drink) {
        if (err) throw err;
        console.log('Drink created!');
        var id = drink._id;
	    //this is line i added thanks to jenvos ... sends back object and i can update webpage 
	res.send(drink);
      /* 
      This sction i had to remove as I needed a object sent back this was used in coursea course
      just to send a resposne back to postman showing post was successful
      	res.writeHead(200, {
            'Content-Type': 'text/plain'
        });	
        res.end('Added the drink with id: ' + id);
		*/
    });
})

.delete(function (req, res, next) {
    Drinks.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

drinkRouter.route('/:drinkId')
.get(function (req, res, next) {
    Drinks.findById(req.params.drinkId, function (err, drink) {
        if (err) throw err;
        res.json(drink);
    });
})

.put(function (req, res, next) {
    Drinks.findByIdAndUpdate(req.params.drinkId, {
        $set: req.body
    }, {
        new: true
    }, function (err, drink) {
        if (err) throw err;
        res.json(drink);
    });
})

.delete(function (req, res, next) {
    Drinks.findByIdAndRemove(req.params.drinkId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});


module.exports = drinkRouter;
