const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
     client.user.setActivity("use -help");
	 
});



client.login(process.env.BOT_TOKEN);
