var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  url: String,
  date: Date,
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
