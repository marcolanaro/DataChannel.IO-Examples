var options = {
	nameSpace: "dataChannel",
	redis: {host: "localhost", port: 6380},
	cookie: {name: "datachannel.io", secret: "thisismysecretkey"}
};


var server = require('http').createServer()
  , connect = require('connect')
  , RedisStore = require("connect-redis")(connect)
  , redis = require("redis");


var dc = require('dataChannel.io').listen(server, {
	nameSpace: options.nameSpace,
	redis: {port: options.redis.port, host: options.redis.host, options: {}},
	static: true
});

server.listen(8081);