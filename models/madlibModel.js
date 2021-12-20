const express = require('express');
const mongoose = require('mongoose');
let Schema = mongoose.Schema;


    
let defmadlibSchema = new Schema({'title': String, 'story': String, 'wordList': {type: Array}, 'name': String, 'uid': String, 'plays': Number});
let defmadlibModel = mongoose.model('madlib', defmadlibSchema);
  
module.exports = defmadlibModel;