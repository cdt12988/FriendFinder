var friends = require('../data/friends.js');
// var match = require('../data/friends.js')[1];

function calculateCompatibility(diff) {
	var min = 0
	var questions = friends[0].scores.length;
	var max = questions * 4;
	var dec = 1 - (diff / max)
	return (dec * 100).toFixed(2);
}

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		return res.json(friends);
	});
	
	app.post('/api/friends', function(req, res) {
		var friend = req.body;
		console.log('User Info: ', friend);
		var bestScore = friend.scores.length * 4;
		var match;
		var newEntry = true;
		friends.forEach(function(itteration, i) {
			var difference = 0;
			for(var j = 0; j < itteration.scores.length; j++) {
				difference += Math.abs(parseInt(itteration.scores[j]) - parseInt(friend.scores[j]));
			}
			console.log(friend.name, itteration.name, difference);
			if(difference < bestScore && itteration.email != friend.email) {
				bestScore = difference;
				match = itteration;
				match.percentage = calculateCompatibility(difference);
			} else if(itteration.email == friend.email) {
				newEntry = false;
			}
		});
		
		console.log('Best Score: ', bestScore);
		console.log('Match: ' , match);
		
		if(newEntry) {
			friends.push(friend);
		}
		
		res.json(match);
	});
} 