const express = require('express');
const mongoose = require('mongoose');
var defaultArray = ["A","B","C"];
var Schema = mongoose.Schema;
var madlibSchema = new Schema({'title': String, 'story': String, 'wordList': {type: Array, default: defaultArray}, 'name': String, 'uid': String, 'plays': Number});
var madlibModel = mongoose.model('madlib', madlibSchema);
module.exports = madlibModel;