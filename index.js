const { Client, RichEmbed } = require('discord.js');
const self = new Client();

const commands = require('./commands.js');

const prefix = "?"

self.on('ready', () => {
  console.log('Bot Online');
  self.user.setActivity('random Games', { type: 'PLAYING' })
});

self.on("message", message => {
  if(message.content === "Bad Bot"){
     message.channel.send("Bad Human");
  };

  if(message.content.startsWith("Ich bin")) {
    var name = message.content.split("Ich bin");
    message.channel.send("Hallo " + name[1] + ", ich bin ein Bot");
  }

  if (message.content.startsWith(prefix) && message.author.username != self.user.username) {
 
    var msgarr = message.content.split(prefix);
    var msg = msgarr[1];
    var args = msg.split(" ");
    var cmd = args.shift();        
    
    commands.sendMsgByCommand(cmd, args, message.channel); 
  
  }
});

self.login(process.env.TOKEN);