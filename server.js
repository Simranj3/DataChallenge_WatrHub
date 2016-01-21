var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/public'));

// Last elements denotes the newest submission
allSubmissions = [];

app.get('/test_hello', function (req, res) {
  res.send('Hello World!');
});

// POSTing to this route saves contact information
app.post('/game/submit_info', function(req, res) {
	var user = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		phoneNumber: req.body.phone,
		email: req.body.email,
		company: req.body.company, 
		role: req.body.role,
		hear: req.body.hear,
		updates: req.body.updates, 

	};

	console.log(req.body.name);
	console.log(user);
	
	allSubmissions.push(user);
	// x 1. Save their contact info and remember who submitted last 
	// x 2. When someone submits a game we know that the last form submission is the current game submission - keep track of who submitted last
	// x 3. Redirect them to the game

	res.redirect('/game2.html');
});


// 
app.post('/save_score', function(req, res) {
	var lastUser = allSubmissions[allSubmissions.length - 1];
	lastUser.score = parseInt(req.body.score);
	lastUser.gscore = parseInt(req.body.gscore);
	lastUser.timestamp = parseInt(req.body.timestamp);
	lastUser.wrongQuestion = req.body.wrongQuestion;
	
	// TODO: Write out file
	fs.writeFileSync("scores.json", JSON.stringify(allSubmissions, null, 4), {flag: 'w+'}, function(err) {
		if(err) {
			return console.log(err);
		}
		
		console.log("The file was saved!");
				
    	res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify({status: 'success'}));
		res.end();
	}); 
});

//GOLF SCORE





app.get('/get_highscores', function(req, res) {
	var highscores = [];
	var goodUsers = [];
	
	for (var i = 0; i < allSubmissions.length; i++) {
		var user = allSubmissions[i];
		if ((user.score != undefined) && (user.gscore != undefined) && (user.firstname != undefined) && (user.lastname != undefined)){
			user.totalScore = user.gscore + user.score*-1;
			user.firstInitial = user.firstname.substr(0,1);
			user.displayName = user.firstInitial + ". " + user.lastname;
			console.log(user.displayName);
			goodUsers.push(user);
		}

	}

	goodUsers.sort(function(a, b) {
		if (a.score*-1 + a.gscore > b.score*-1 + b.gscore) {
			return 1;
		}
		if (a.score*-1 + a.gscore < b.score*-1 + b.gscore) {
			return -1;
		}

		if (a.totalScore == b.totalScore) {
			return a.timestamp - b.timestamp;
		}
	});



	ret = [];
	for (var i = 0; i < Math.min(10, goodUsers.length); i++) {
		ret.push(goodUsers[i]);
	}	
	console.log(JSON.stringify({results: ret}));

    res.setHeader('Content-Type', 'application/json');
	res.write(JSON.stringify({results: ret}));
	res.end();

	// TODO: return array
});

//read the file every time the server starts up 
// 
allSubmissions = JSON.parse(fs.readFileSync('scores.json'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});