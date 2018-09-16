//	DEPENDENCIES
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//	Support JSON encoded bodies
app.use(bodyParser.json());
//	Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/app/public')));

//	ROUTES
require(path.join(__dirname + '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname + '/app/routing/htmlRoutes.js'))(app);

//	SERVER LISTENER
app.listen(PORT, function() {
	console.log('listening on port ' + PORT + '...');
});