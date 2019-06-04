const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var category = new Schema({
    "categoryID"  : String,
    "categoryName": String,
    "description" : String,
});

var categoryModel = mongoose.model('category', category);

module.exports = {
    categoryModel,

    addCategory: function(data){
        return new Promise(function(resolve, reject){
            var category_data = new categoryModel({
                categoryID: data.categoryID,
                categoryName: data.categoryName,
                description: data.description
            });
            category_data.save((err)=>{
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

    removeCategory: function(categoryID){}
}