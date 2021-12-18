var express = require('express');
var router = express.Router();
//setup mongo
var mongoose = require('mongoose');
//var mongopassword = require('./secrets.js')
var mongopassword = process.env.MONGOPASS;
//need madlib model
//var madlibModel = require('../models/madlibModel');

var mongodb = 'mongodb+srv://cg123:'+ mongopassword +'@sandbox.o8c7z.mongodb.net/Madlib?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('err', console.error.bind(console, 'mongodb connection error'));


/*
  router.get('/', function(req, res, next) {
    res.redirect('/index.html');
  });
*/
router.post('/createpost', function(req, res, next){
    console.log('posting new story obj');
    let storyObj = req.body;
    console.log(storyObj);
    console.log(storyObj.wordList);
    let array = ['helloworld', 'hello2'];
    console.log(typeof array);
    let stringArray = JSON.stringify(storyObj.wordList);
    console.log(stringArray)
    var Schema = mongoose.Schema;
        var madlibSchema = new Schema({'title': String, 'story': String, 'wordList': {type: Array, default: storyObj.wordList}, 'name': String, 'uid': String, 'plays': Number});
        var madlibModel = mongoose.model('madlib', madlibSchema);
        module.exports = madlibModel;

    let madlib_instance = new madlibModel({title: req.body.title, story: req.body.story, worldList: {String: storyObj.wordList}, name: req.body.name, uid: req.body.uid, plays: req.body.plays})
    madlib_instance.save(function(err){if (err) console.log(err);})
    
    
})

  
module.exports = router;