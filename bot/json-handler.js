//SERIOUS WARNING: This JSON Parser is pure Garbage and i know that. It will probably be fixed soon

'use strict';
var request = require('request');

const main = require('../index.js');
const embeds = require('./embeds.js');

module.exports.RedditJSON = function(obj, len){
    var cstring;
    var content = ""; 
    cstring = JSON.stringify(obj, null, 2);
    cstring = cstring.split("[");
    cstring = cstring[2].split("]");
    cstring = cstring[0].split('"');
    for (var i = 1; i <= len; i++) {
      content += cstring[i*2+1];
      content += "\n";
    }
    return content;
}

module.exports.getCatgirl = function(channel) {
  request('https://nekos.life/api/neko', function (error, response, body) {
    var msgstring = body.split('"');
    var msg = "";
    if (error)
      console.error(error);
    if (response.statusCode != 200)
      console.error(response.statusCode);
    msg = msgstring[3];
    msg = embeds.CatgirlEmbed(msg);
    main.sendMsg(msg, channel);
  });
}

module.exports.getLewdCatgirl = function(channel) {
  request('https://nekos.life/api/lewd/neko', function (error, response, body) {
    var msgstring = body.split('"');
    var msg = "";
    if (error)
      console.error(error);
    if (response.statusCode != 200)
      console.error(response.statusCode);
    msg = msgstring[3];
    msg = embeds.CatgirlEmbed(msg);
    main.sendMsg(msg, channel);
  });
}

module.exports.getCat = function(channel) {
  request('http://aws.random.cat/meow', function (error, response, body) {
  var msgstring = body.split('"');
	var msg = "";
	if (error)
	  console.error(error);
  if (response.statusCode != 200)
	  console.error(response.statusCode);
  msg = msgstring[3];
  msg = msg.replace(/\\/g, "");
	msg = embeds.CatEmbed(msg);
	main.sendMsg(msg, channel);
  });
}