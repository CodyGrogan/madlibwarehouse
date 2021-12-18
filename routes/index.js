var express = require('express');
var router = express.Router();
//setup mongo
var mongoose = require('mongoose');
//var mongopassword = require('./secrets.js')
var mongopassword = process.env.MONGOPASS;
//need madlib model
var madlibModel = require('../models/madlibModel');

var mongodb = 'mongodb+srv://cg123:'+ mongopassword +'@sandbox.o8c7z.mongodb.net/Madlib?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('err', console.error.bind(console, 'mongodb connection error'));


router.get('/', function(req, res, next) {
    res.redirect('/index.html');
  });

router.post('/createpost', function(req, res, next){
    console.log('posting new story obj');
    let storyObj = req.body;
    console.log(storyObj);
    
    
})

  
module.exports = router;