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

dc.addNameSpace(options.nameSpace);

server.listen(8082);