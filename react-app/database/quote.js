const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quote = new Schema({
    "quoteID"   : {
        type: String,
        unique: true
    },
    "quoteContent": String,
    "author"    : String,
    "datePosted": Date,
    "rating"    : Number,
    "category"  : String
});

var quoteModel = mongoose.model("quotes", quote);

module.exports = {
  quoteModel,

    addQuote: function(data){
        // console.log(data);
        return new Promise(function(resolve, reject){
            var quote_data = new quoteModel({
                quoteContent: data.quote,
            });
            quote_data.save((err)=>{
                if(err){
                    if(err.code == 11000){
                        reject("Quote already exists!");
                    } else {
                        resolve();
                    }
                } else {
                  resolve();
                }
            })
        })
    },

  fetchQuoteList: function(categoryName) {
    // console.log(categoryName);
    return new Promise(function(resolve, reject) {
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

  rateQuote: function(data) {},

  removeQuote: function(data) {}
};
