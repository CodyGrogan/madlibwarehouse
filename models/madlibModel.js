const express = require('express');
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var madlibSchema = new Schema({'title': String, 'story': String, 'wordlist': Array, 'name': String, 'uid': String, 'plays': Number});
var madlibModel = mongoose.model('madlib', madlibSchema);
module.exports = madlibModel;