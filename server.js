var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('Mongoose');
var User = require('./lib/models/users-model')

var port = 8880;
var app = express();
var mongoUri = 'mongodb://localhost:27017/clients-user';  //turn on Launch Rocket to get things working

mongoose.connect(mongoUri); //this tells mongoose to go connect to the above address
mongoose.connection.once('open', function(){  //connecting the database
	console.log('connected to db at ' + mongoUri)
});

app.use(bodyParser.json());

app.post('/api/user', function(req, res){
	// User.create(req.body, function(response){
	// 	res.status(200).json(response);
	// },
	// function(err){
	// 	res.status(500).json(err);
	// });

	var user = new User(req.body);
	user.save(function(err, response){
		if(!err){
			if(docs.length === 0){
				res.status(404).send("No documents found");
			}
			res.status(200).json(user);
		} else {
			res.status(500).json(err);
		}
	});
});

app.get('/api/users', function(req, res){
	User.find(function(err, docs){ //the empty object is a way to get all the documents
		if(!err){
			res.status(200).json(docs);
		} else {
			res.status(500).json(err)
		}
	});
});












app.listen(port, function(){
	console.log('listening on ' + port)
})