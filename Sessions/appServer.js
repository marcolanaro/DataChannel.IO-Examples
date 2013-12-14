var express = require('express');
var app = express();
var RedisStore = require("connect-redis")(express);

app.use(express.cookieParser("thisismysecretkey"));
app.use(express.session({
	secret: "thisismysecretkey",
	key: 'datachannel.io',
	store: new RedisStore({ host: 'localhost', port: 6380 })
}));

app.get('/login', function(req, res) {
	req.session.myUserLoggedIn = true;
	res.send("User Logged In");
});

app.get('/logout', function(req, res) {
	req.session.myUserLoggedIn = false;
	res.send("User Logged Out");
});

app.listen(8080);