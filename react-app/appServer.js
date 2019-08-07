const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const clientSessions = require("client-sessions");
const bodyParser = require('body-parser');
const args = process.argv.slice(2)
const nodemailer = require("nodemailer");
const reminderHandler = require("./database/reminderHandler");

port = normalizePort(process.env.PORT || '10002'); // setting default port

app.set("port", port);
app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (args[0] == 'PROD' || args[0] == 'prod') {
  console.log("Application will be deployed in PRODUCTION mode!");
  mongoose.connect(
    "mongodb://localhost:10016/mindSpark",
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  );
}
else {
  console.log("Application will be deployed in DEVELOPMENT mode!");
  mongoose.connect(
    "mongodb://admin:admin123@ds133187.mlab.com:33187/mindsparkdb",
    { useNewUrlParser: true }
  );
}

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Connected To Mongo Database");
});

// Setup client-sessions
app.use(clientSessions({
  cookieName: "session", // this is the object name that will be added to 'req'
  secret: "17gnirtselbasseugnugnolasisihtlol2018", // this is a long un-guessable string.
  duration: 5 * 60 * 1000, // duration of the session in milliseconds (5 minutes)
}));

// top level routes, for more detail, see ./routes
app.use("/db", require("./routes/db.js"));
app.get("*", (req, res) => {
  res.sendFile(path.join((__dirname = "./build/index.html")), { root: "./" });
});

// start listening
app.listen(port, () => {
  console.log("Server started on port " + port);
});

// helper function to make sure port number is right
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mindspark3@gmail.com',
    pass: 'Admin@123'
  }
});

function sendEmail(from, to, subject, html) {
  transport.sendMail({ from, subject, to, html }, (err, info) => {
    if (err) {
      reject(err);
    }
    else {
      resolve(info);
    }
  });
}
module.exports.sendEmail = sendEmail;

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'ppanchani98@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
//   html: '<b>That was easy!</b>'
// };

// transport.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 