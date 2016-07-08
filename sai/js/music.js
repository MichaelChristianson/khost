var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musciSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  createdAt: Date.now,
  UpdatedAt: Date,
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
