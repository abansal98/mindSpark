const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quote = new Schema({
  text: String,
  author: String,
  datePosted: Date,
  rating: Number,
  category: [],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
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


  addComment: function (data, quoteId) {
    return new Promise((resolve, reject) => {
      var Quote = quoteModel.findById(quoteId);

      var newComment = {
        comment: data.commentText,
        date: data.dateComment
      };

      Quote.comments.unshift(newComment);

      Quote.save(err => {
        if (err) {
          reject("Errors");
        } else {
          resolve();
        }
      });

    })

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

  rateQuote: function (data, quoteId) {
    console.log(data);
    return new Promise((resolve, reject) => {
      quoteModel.findOneAndUpdate(
        {
          _id: quoteId
        },
        {
          rating: data.rating
        },
        function(err, doc){
          if(err){
            console.log("Following error occured when updating the rating:", err);
          }
          else{
            console.log("Record updated!", doc);
          }
        })
    })
  },

  removeQuote: function (data) { }
};
