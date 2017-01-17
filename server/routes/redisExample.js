



var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

//store a string
client.set('redRanger', 'jasonLeeScott');

//get a string 
client.get('redRanger', function(err, reply) {
    console.log(reply);
});

//store hash
client.hmset('powerRangers', {
    'blue': 'billyCranston',
    'pink': 'kimberlyHart',
    'black': 'zackTaylor', 
    'yellow': 'triniKwan'
});

//retrieve hash
client.hgetall('powerRangers', function(err, object) {
    console.log(object);
});

//store a list 
client.rpush(['powerRangers', 'blue', 'pink'], function(err, reply) {
    console.log(reply);
});

//retrieve elements in list
client.lrange('powerRangers', 0, -1, function(err, reply) {
    console.log(reply); 
});

//storing sets
client.sadd(['badGuys', 'ritaRepulsa', 'goldar', 'ivanOoze'], function(err, reply) {
    console.log(reply); 
});

//retrieve members of the set
client.smembers('badGuys', function(err, reply) {
    console.log(reply);
});





