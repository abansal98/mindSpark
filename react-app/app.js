var express = require('express');
const mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var tunnel = require('tunnel-ssh');
port = normalizePort(process.env.PORT || '4000'); // setting default port

var config = {
    username: 'student',
    host: '10.10.193.163',
    agent: process.env.SSH_AUTH_SOCK,
    //privateKey:require('fs').readFileSync('/Users/myusername/.ssh/id_rsa'),
    port: 6472,
    //dstHost: 'mongodb://localhost:10016/mindSpark',
    dstPort: 6472,
    localHost: '127.0.0.1',
    password: 'fkGM@2869',
    localPort: 6472
};

var server = tunnel(config, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    mongoose.connect('mongodb://localhost:10016/mindSpark');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("DB connection successful");
        // console.log(server);
    });
});

app.set('port', port)

// mongoose.connect('mongodb://localhost:10016/mindSpark');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//     console.log('Connected To Mongo Database');
// });

// top level routes, for more detail, see ./routes
app.use('/db', require('./routes/db.js'));
app.use('/', require('./routes/index.js'));


// catch 404 and forward to error handler
// app.use((req, res, next) => {
// 	const err = new Error('Not Found')
// 	err.status = 404
// 	next(err)
// })

// start listening
app.listen(port, () => {
	console.log('Server started on port ' + port);
})

// helper function to make sure port number is right
function normalizePort (val) {
	const port = parseInt(val, 10)

	if (isNaN(port))
		return val

	if (port >= 0)
		return port

	return false
}