var express = require('express');
const mongoose = require('mongoose');
var app = express();
port = normalizePort(process.env.PORT || '10002'); // setting default port
const path = require('path');
bodyParser = require('body-parser');
const clientSessions = require("client-sessions");

app.set('port', port);
app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:10016/mindSpark');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log('Connected To Mongo Database');
});

// Setup client-sessions
app.use(clientSessions({
    cookieName: "session", // this is the object name that will be added to 'req'
    secret: "17gnirtselbasseugnugnolasisihtlol2018", // this is a long un-guessable string.
    duration: 5 * 60 * 1000, // duration of the session in milliseconds (5 minutes)
    activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
}));

// top level routes, for more detail, see ./routes
app.use('/db', require('./routes/db.js'));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname = './build/index.html'), {root: './'});
})

// start listening
app.listen(port, () => {
	console.log('Server started on port ' + port);
})

// helper function to make sure port number is right
function normalizePort(val) {
	const port = parseInt(val, 10)

	if (isNaN(port))
		return val

	if (port >= 0)
		return port

	return false
}