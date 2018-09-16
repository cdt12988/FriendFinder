var path = require('path');

module.exports = function(app) {
	//	Survey Page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	//	Home Page (app.use is triggered when a user attempts to go to a path that isn't defined as a legitimate route)
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	});
}