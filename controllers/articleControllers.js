var Article = require("../models/Article");

module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    Article.find({})
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
    Article.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },

  // This method handles deleting quotes
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
