const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quote = new Schema({
  text: String,
  author: String,
  datePosted: Date,
  rating: Number,
  category: []
});

var quoteModel = mongoose.model("quotes", quote);

module.exports = {
  quoteModel,

  addQuote: function (data) {
     console.log(data);
    return new Promise(function (resolve, reject) {
      var quote_data = new quoteModel({
        text: data.text,
        author: data.author,
        datePosted: data.currentDate,
        category: data.category,
        rating: data.rating
      });
      quote_data.save(err => {
        if (err) {
          reject("Quote already exists!");
        } else {
          resolve();
        }
      });
    });
  },

  fetchQuote: function (authorName) {
    var sortDate = { datePosted: -1 };
    return new Promise(function (resolve, reject) {
      quoteModel.find({
        author: authorName
      }).sort(sortDate)
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data);
          } else {
            reject("No quote bro");
          }
        });
    });
  },

  fetchQuoteList: function (categoryName) {
    // console.log(categoryName);
    return new Promise(function (resolve, reject) {
      quoteModel
        .find({
          category: categoryName
        })
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data);
          } else {
            reject("No quotes found with category " + categoryName + "!");
          }
        });
    });
  },

  rateQuote: function (quoteId) {
    return new Promise((resolve, reject) => {
      quoteModel.findById(quoteId)
    })
    .exec()
    .then(data)
   },

  removeQuote: function (data) { }
};
