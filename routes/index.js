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
let Schema = mongoose.Schema;


    
let defmadlibSchema = new Schema({'title': String, 'story': String, 'wordList': {type: Array}, 'name': String, 'uid': String, 'plays': Number});
let defmadlibModel = mongoose.model('madlib', defmadlibSchema);
  



router.post('/create/post', function(req, res, next){
    console.log('posting new story obj');
    let storyObj = req.body;
    console.log(storyObj);
    console.log(storyObj.wordList);
   
    console.log(storyObj.wordList[0]);

    let madlib_instance = new defmadlibModel({title: req.body.title, story: req.body.story, wordList: storyObj.wordList, name: req.body.name, uid: req.body.uid, plays: req.body.plays})
    
    madlib_instance.save(function(err){if (err) console.log(err);})
    
   
    
});



router.get('/play/storylist', function(req, res, next){

    console.log('story list request')
  
   

        console.log('preparing to query')

        let query = defmadlibModel.find({}, function (err, found){
            if (err){console.log(err);
            res.send(err)}
            else{
                console.log(found);
                res.json(found);
            }
        });

});

router.put('/play/updateplays', function(req, res, next){
    console.log('Updating a storyObj plays value');
    let storyObj = req.body;
    console.log(storyObj);
    let newplays = storyObj.plays + 1;
    let searchid = `ObjectId("${storyObj._id}")`;
    console.log(searchid);
    console.log(storyObj.plays)
    console.log('plays' + newplays);
    
    defmadlibModel.findOne({_id : storyObj._id}, function (err, doc){
        if (err){console.log(err);
        res.send(err)}
        else{
            console.log(doc);
            doc.plays = newplays;
            doc.save();
            
        }
    });


})

//this must be last
router.get('*', function(req, res, next) {
    res.redirect('/');
  });


module.exports = router;