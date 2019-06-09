const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reminder = new Schema({
    // "username" : {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    "categoriesId" : {
        type: Array,
        required : true,
    },
    "reminderDays" : {
        type: Array,
        required: true
    },
    "timeStamp" : {
        type: String,
        required: true
    }
    
})

var reminderModel = mongoose.model('reminder', reminder);

module.exports = {
    reminderModel,

    submitReminder: function (data) {
        return new Promise((resolve, reject) => {
            var reminder_data = new reminderModel({
              //  username: data.loggedUser,
                categoriesId: data.selectedCategories,
                reminderDays: data.selectedDays,
                timeStamp: data.selectedTimeStamp
            });
            reminder_data.save((err) => {
                if(err){
                    reject("Error setting the reminder: " + err.message);
                }else {
                    resolve();
                }
            })
        });
       }
}