const mailer = require("../appServer");
const user = require("./users").userModel;
const quote = require("./quote").quoteModel;
const reminder = require("./reminder").reminderModel;

module.exports = {
    getReminders: function () {
        var currTime = new Date();
        var timeString = (currTime.getHours() < 10 ? '0' + currTime.getHours().toString() : currTime.getHours().toString()) + ':' + (currTime.getMinutes() < 10 ? '0' + currTime.getMinutes().toString() : currTime.getMinutes().toString());
        console.log("currtime", timeString);
        return new Promise((resolve, reject) => {
            reminder.find({
                timeStamp: timeString
            })
                .exec()
                .then(data => {
                    if (data) {
                        for (var i = 0; i < data.length; i ++) {
                            console.log(i);
                            user.findOne({
                                username: data[i].username
                            })
                                .exec()
                                .then(user => {
                                    quote.findOne()
                                        .exec()
                                        .then(quote => {
                                            mailer.sendEmail(
                                                "donotreply@mindspark.com",
                                                "bansal.arnav1998@gmail.com",
                                                "MindSpark quote of the day",
                                                quote.text
                                            )
                                            resolve();
                                        })
                                });
                        }
                    }
                    else {
                        reject();
                    }
                })
        })
    }
}