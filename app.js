var express = require('express');
mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel')
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');
var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function (req, res) {
	request('http://www.google.com', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
			console.log(body) // Show the HTML for the Google homepage. 
		}
	});
});
app.use('/api', bookRouter);
app.get('/', function (req, res) {
	res.send('Welcome to my API!');
});

app.listen(port, function () {
	console.log('gulp is restarting and will be running on PORT: ' + port);
});