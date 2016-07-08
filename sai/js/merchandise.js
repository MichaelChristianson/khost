var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var merchandiseSchema = new Schema({
  title:  String,
  price: Number,
  Stock: Number

});

var Merchandise  = mongoose.model('Merchandise', merchandiseSchema );


var shirt = new Merchandise({title: "coolshirt", price: 100, stock: 1});
