const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var quote = new Schema({
    "quoteID"   : {
        type: String,
        unique: true
    },
    "text"      : String,
    "author"    : String,
    "datePosted": Date,
    "rating"    : Number,
    "category"  : String
});

var quoteModel = mongoose.model('quotes', quote);

module.exports = {
    quoteModel,

    addQuote: function(data){
        return new Promise(function(resolve, reject){
            var quote_data = new quoteModel({
                quoteID: DataCue.quoteID,
                text: data.text,
                author: data.author,
                datePosted: data.datePosted,
                rating: data.rating,
                category: data.category
            });
            quote_data.save((err)=>{
                if(err){
                    if(err.code == 11000){
                        reject("Quote already exists!");
                    } else {
                        resolve();
                    }
                }
            })
        })
    },

    rateQuote: function(data){},

    removeQuote: function(data){},

}