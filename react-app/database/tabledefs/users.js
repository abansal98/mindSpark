const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var user = new Schema({
    "username": {
        type: String,
        unique: true
    },
    "password": String,
    "name"    : String,
    "email"   : {
        type: String,
        unique: true
    },
    "dob"     : Date,
    "role"    : {
        type: String,
        enum: ['admin', 'user']
    }
});

var userModel = mongoose.model('users', user);

module.exports = {
    userModel,

    addUser: function(data){
        return new Promise(function(resolve, reject){
            var user_data = new userModel({
                username: data.username,
                password: data.password,
                name: data.name,
                email: data.email,
                dob: data.dob,
                role: data.role
            });
            user_data.save((err)=>{
                if(err){
                    if(err.code == 11000){
                        reject("User with the provided username already exists!");
                    } else {
                        resolve();
                    }
                }
            })
        })
    },

    userLogin: function(data){
        return new Promise(function(resolve, reject){
            userModel.find({
                username: data.username
            })
            .exec()
            .then((user)=> {
                if(user.length == 1){
                    if(user.password == data.password){
                        resolve();
                    }
                    else{
                        reject("Password does not match!");
                    }
                }
                else{
                    reject("User does not exist!");
                }
            })
        })
    }
}