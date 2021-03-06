var options = {
	nameSpace: "dataChannel",
	redis: {host: "localhost", port: 6380},
	cookie: {name: "datachannel.io", secret: "thisismysecretkey"}
};

var server = require('http').createServer();
var dc = require('dataChannel.io').listen(server, {
	redis: {port: options.redis.port, host: options.redis.host, options: {}},
	static: true
});

dc.addNameSpace(options.nameSpace, {
	session: {
		cookie: options.cookie,
		auth: function(session) {
			if (session.myUserLoggedIn === true)
				return true;
			else
				return false;
		}
	}
});

server.listen(8081);