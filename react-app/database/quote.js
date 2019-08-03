const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quote = new Schema({
  text: String,
  author: String,
  datePosted: Date,
  rating: Number,
  ratings: Number,
  category: [],
  newauthor: String,
  reportNum: {
    type: Number,
    default: 0
  },
  comments: [
    {
      commentText: {
        type: String,
        require: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

quote.index(
  {
    author: "text",
    text: "text",
    category: "text"
  },
  {
    weights: {
      text: 5,
      author: 3,
      category: 1
    }
  }
);

var quoteModel = mongoose.model("quotes", quote);

module.exports = {
  quoteModel,

  addQuote: function(data) {
    return new Promise(function(resolve, reject) {
      var quote_data = new quoteModel({
        text: data.text,
        author: data.author,
        datePosted: data.currentDate,
        category: data.category,
        rating: data.rating,
        newauthor: data.newauthor
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

  SearchQuote: function(data) {
    return new Promise((resolve, reject) => {
      quoteModel
        .find({
          $text: { $search: data }
        })
        .exec()
        .then(data => {
          if (data.length >= 0) {
            resolve(data);
          } else {
            reject("No quote with this input ", data);
          }
        });
    });
  },

  addComment: function(data, quoteId) {
    return new Promise((resolve, reject) => {
      quoteModel.findOneAndUpdate(
        {
          _id: quoteId
        },
        {
          $push: {
            comments: {
              $each: [
                {
                  commentText: data.commentText,
                  name: data.name,
                  avatar: data.avatar
                }
              ],
              $position: 0
            }
          }
        },
        {
          new: true
        },
        function(err, doc) {
          if (err) {
            console.log(
              "Following error occured when updating the rating:",
              err
            );
            reject();
          } else {
            console.log("Record updated!", doc);
            resolve();
          }
        }
      );
    });
  },

  deleteComment: function(quoteId, commentId) {
    return new Promise((resolve, reject) => {
      quoteModel.update(
        {
          _id: quoteId
        },
        {
          $pull: {
            comments: {
              _id: commentId
            }
          }
        },
        function(err, doc) {
          if (err) {
            console.log(
              "Following error occured when deleting the comment:",
              err
            );
            reject();
          } else {
            console.log("Record updated!", doc);
            resolve();
          }
        }
      );
    });
  },

  getQuote: function(quoteId) {
    return new Promise((resolve, reject) => {
      quoteModel
        .find({
          _id: quoteId
        })
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data[0]);
          } else {
            reject("No quote with this id ", quoteId);
          }
        });
    });
  },

  fetchQuote: function(authorName) {
    var sortDate = { datePosted: -1 };
    return new Promise(function(resolve, reject) {
      quoteModel
        .find({
          author: authorName
        })
        .sort({ rating: -1, datePosted: -1 })
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

  fetchQuoteList: function(categoryName) {
    var sortDate = { datePosted: -1 };
    return new Promise(function(resolve, reject) {
      quoteModel
        .find({
          category: categoryName
        })
        .sort({ rating: -1, datePosted: -1 })
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

  fetchPendingQuoteList: function() {
    return new Promise(function(resolve, reject) {
      quoteModel
        .find({})
        .exec()
        .then(data => {
          if (data) {
            resolve(data);
          } else {
            reject("No quotes found that required approval!");
          }
        });
    });
  },

  rateQuote: function(data, quoteId) {
    return new Promise((resolve, reject) => {
      quoteModel.findOneAndUpdate(
        {
          _id: quoteId
        },
        {
          rating: data.rating
        },
        {
          new: true
        },
        function(err, doc) {
          if (err) {
            console.log(
              "Following error occured when updating the rating:",
              err
            );
          } else {
            console.log("Record updated!", doc);
          }
        }
      );
    });
  },

  reportIncrement: function(data) {
    return new Promise(function(resolve, reject) {
      quoteModel
        .findOne({
          _id: data.quoteId
        })
        .exec()
        .then(user => {
          if (user) {
            user.reportNum++;
            user.save(err => {
              if (err) {
                reject("Cannot increament reportNum: " + err.message);
              } else {
                resolve();
              }
            });
          } else {
            reject("QuoteId Not Found!");
          }
        });
    });
  },

  keepQuote: function(data) {
    return new Promise(function(resolve, reject) {
      quoteModel
        .findOne({
          _id: data.quoteId
        })
        .exec()
        .then(user => {
          if (user) {
            user.reportNum = 0;
            user.save(err => {
              if (err) {
                reject("Cannot save changes: " + err.message);
              } else {
                resolve();
              }
            });
          } else {
            reject("QuoteId Not Found!");
          }
        });
    });
  },

  editQuote: function(data) {
    // console.log(data);
    return new Promise(function(resolve, reject) {
      quoteModel
        .findOne({
          _id: data.quoteid
        })
        .exec()
        .then(user => {
          if (user) {
            user.text = data.quote;
            user.save(err => {
              if (err) {
                reject("Cannot save changes: " + err.message);
              } else {
                resolve();
              }
            });
          } else {
            reject("QuoteId Not Found!");
          }
        });
    });
  },

  deleteQuote: function(data) {
    // console.log("DeleteQuote called");
    return new Promise(function(resolve, reject) {
      quoteModel.deleteOne({ _id: data.quoteId }).exec();
    });
  },

  deletePersonalQuote: function(data) {
    // console.log("DeletePersonalQuote called");
    return new Promise(function(resolve, reject) {
      quoteModel.deleteOne({ _id: data.quoteId }).exec();
    });
  },

  removeQuote: function(data) {}
};
