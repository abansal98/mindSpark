const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var report = new Schema({
  username: {
    type: String,
    required: true
  },
  quoteId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

var reportModel = mongoose.model("report", report);

module.exports = {
  reportModel,

  submitReport: function(data) {
    return new Promise((resolve, reject) => {
      var report_data = new reportModel({
        username: data.username,
        quoteId: data.quoteId,
        description: data.description
      });
      report_data.save(err => {
        if (err) {
          reject("Error saving report: " + err.message);
        } else {
          resolve();
        }
      });
    });
  },

  checkReport: function(duser, dquoteId) {
    return new Promise(function(resolve, reject) {
      reportModel
        .findOne({
          username: duser,
          quoteId: dquoteId
        })
        .exec()
        .then(user => {
          if (user) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
};
