const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
     client.user.setActivity("use -help");
	 
});



client.login('NDUyMjA4NzYwNTUxNzY4MDY1.DfwkDg.IR9Q6t0r_xkw-kj2yIa98daCKsM');
