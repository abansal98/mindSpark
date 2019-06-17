const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quote = new Schema({
  "quoteID": {
    type: String,
    unique: true
  },
  "text": String,
  "author": String,
  "datePosted": Date,
  "rating": Number,
  "category": String
});

var quoteModel = mongoose.model("quotes", quote);

module.exports = {
  quoteModel,

  addQuote: function (data) {
    // console.log(data);
    return new Promise(function (resolve, reject) {
      var quote_data = new quoteModel({
        text: data.quote,
        author: data.author,
        datePosted: data.currentDate
      });
      quote_data.save((err) => {
        if (err) {
          reject("Quote already exists!");
        } else {
          resolve();
        }
      })
    })
  },

  fetchQuote: function (authorName) {
    var sortDate = { datePosted: -1};
    return new Promise(function (resolve, reject) {
      quoteModel.find({
        author: authorName
      }).sort(sortDate)
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data);
          }
          else {
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

  rateQuote: function (data) { },

  removeQuote: function (data) { }
};
