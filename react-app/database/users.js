const mailer = require("../appServer");
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const randomstring = require("randomstring");
const crypto = require("crypto");
const gravatar = require("gravatar");

var user = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  dob: Date,
  secretToken: String,
  resetPasswordToken: {
    type: String,
    default: ""
  },
  active: false,
  role: {
    type: String,
    enum: ["admin", "user"]
  },
  avatar: {
    type: String
  },
  rating: [
    {
      quoteId: {
        type: Schema.Types.ObjectId,
        ref: 'quote'
      },
      rating: Number
    }
  ]
});

// function encrpytPass(pass) {
//     console.log("This function was called for password encryption!");
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(pass, salt, function (err, hash) {
//             console.log(hash);
//         });
//     });
// }

// function comparePass(pass, hash) {
//     bcrypt.compare(pass, hash).then((res) => {
//         return res;
//     });
// }

var userModel = mongoose.model("users", user);

module.exports = {
  user,
  userModel,

  addUser: function (data) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(data.password, salt, function (err, hash) {
          if (err) {
            reject("There was an error encrypting the password");
          } else {
            var foo = randomstring.generate(data.secretToken);
            var user_data = new userModel({
              username: data.username,
              password: hash,
              name: data.name,
              email: data.email,
              dob: data.dob,
              role: data.role,
              secretToken: foo,
              active: data.active,
              resetPasswordToken: data.resetPasswordToken,
              avatar: gravatar.url(data.email, {
                s: "200",
                r: "pg",
                d: "mm"
              })
            });
            user_data.save(err => {
              if (err) {
                if (err.code == 11000) {
                  reject("Username or Email already taken");
                } else {
                  reject("Cannot create a new user: " + err.message);
                }
              } else {
                const html = `Welcome to "MindSpark"
                                <br/>
                                Please verify your email by using the following link:
                                <br/>
                                <a href="http://myvmlab.senecacollege.ca:6475/verify/${foo}" > http://myvmlab.senecacollege.ca:6475/verify/${foo} </a>`;
                //console.log(user_data.email);
                // console.log(foo);
                mailer.sendEmail(
                  "donotreply@mindspark.com",
                  user_data.email,
                  "MindSpark email verification",
                  html
                );
                resolve();
              }
            });
          }
        });
      });
    });
  },

  userLogin: function (data) {
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          username: data.username
        })
        .exec()
        .then(user => {
          if (user) {
            bcrypt.compare(data.password, user.password).then(res => {
              if (res) {
                //console.log(user.active);
                if (user.active === "true") {
                  resolve();
                } else {
                  reject("Please verify the email first!");
                }
              } else {
                reject("Username or Password incorrect!");
              }
            });
          } else {
            reject("User does not exist!");
          }
        });
    });
  },

  checkForgotPasswordToken: function (data) {
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          resetPasswordToken: data.resetPasswordToken
        })
        .exec()
        .then(user => {
          if (user) {
            resolve();
          } else {
            reject("Token does not exist in database!");
          }
        });
    });
  },

  checkRegistrationToken: function (data) {
    //console.log(data);
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          secretToken: data.secretToken
        })
        .exec()
        .then(user => {
          if (user) {
            user.active = "true";
            // console.log(user.active);
            user.save(err => {
              if (err) {
                reject("Cannot save verification: " + err.message);
              } else {
                resolve();
              }
            });
            resolve();
          } else {
            reject("Incorrect Token!");
          }
        });
    });
  },

  forgotPassword: function (data) {
    console.log(data);
    var token = "";
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          email: data.email
        })
        .exec()
        .then(user => {
          if (user) {
            user.save(err => {
              if (err) {
                reject("Cannot submit: " + err.message);
              } else {
                crypto.randomBytes(20, function (err, buf) {
                  token = buf.toString("hex");
                  console.log(token);
                  user.resetPasswordToken = token;
                  user.save(err => {
                    if (err) {
                      reject("Cannot save token: " + err.message);
                    } else {
                      const html = `Please follow the instructions to change Password:
                        <br/>
                        Use the following link to change password:
                        <br/>
                        <a href="http://myvmlab.senecacollege.ca:6475/reset/${token}" > http://myvmlab.senecacollege.ca:6475/reset/${token} </a>`;
                      //console.log(user_data.email);
                      // console.log(foo);
                      mailer.sendEmail(
                        "donotreply@mindspark.com",
                        user.email,
                        "MindSpark Password Change Request",
                        html
                      );
                      resolve();
                    }
                  });
                });
                resolve();
              }
            });
          } else {
            reject("Email Address Not Found!");
          }
        });
    });
  },

  updatePassword: function (data) {
    //console.log(data);
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          resetPasswordToken: data.resetPasswordToken
        })
        .exec()
        .then(user => {
          if (user) {
            bcrypt.genSalt(10, function (err, salt) {
              bcrypt.hash(data.password, salt, function (err, hash) {
                if (err) {
                  reject("There was an error encrypting the password");
                } else {
                  user.password = hash;
                  user.save(err => {
                    if (err) {
                      reject("Cannot update password: " + err.message);
                    } else {
                      resolve();
                    }
                  });
                }
              });
            });
          } else {
            reject("Incorrect Token!");
          }
        });
    });
  },

  changePassword: function (data) {
    //console.log(data);
    return new Promise(function (resolve, reject) {
      userModel
        .findOne({
          username: data.username
        })
        .exec()
        .then(user => {
          if (user) {
            bcrypt.compare(data.oldpassword, user.password).then(res => {
              if (res) {
                bcrypt.genSalt(10, function (err, salt) {
                  bcrypt.hash(data.password, salt, function (err, hash) {
                    if (err) {
                      reject("There was an error encrypting the password");
                    } else {
                      user.password = hash;
                      user.save(err => {
                        if (err) {
                          reject("Cannot change password: " + err.message);
                        } else {
                          resolve();
                        }
                      });
                    }
                  });
                });
              } else {
                reject("Old Password Incorrect!");
              }
            });
          } else {
            reject("No username found!");
          }
        });
    });
  },

  getUsers: function () {
    return new Promise(function (resolve, reject) {
      userModel
        .find({})
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data);
          } else {
            reject("No users available!");
          }
        });
    });
  },

  getUser: function (data) {
    return new Promise(function (resolve, reject) {
      userModel
        .find(
        {
          username: data
        },
        {
          username: 1,
          email: 1,
          avatar: 1
        }
        )
        .exec()
        .then(data => {
          if (data.length > 0) {
            resolve(data);
          } else {
            reject("No users available!");
          }
        });
    });
  }
};
