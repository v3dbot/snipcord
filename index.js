const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//const snip = "C:/Users/Zwemer/Downloads/Snip-v6.10.2/Snip/Snip.txt";
//const token = "NzI4MjcyNzU5MTYyOTI5MTky.Xv3-3A.tXp9BDqADqyjLH__SCb5Htl2hhc";
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	set();
	fs.watchFile(process.env.SNIPPATH, set);
});
let lasta = "";
client.login(process.env.TOKEN);

set = function() {
	const a = fs.readFileSync(process.env.SNIPPATH, {}).toString();
	if(a != lasta){
		client.user.setActivity(a, {type : `LISTENING`})
		.catch(console.error);
		console.log(a);
		lasta = a;
	}
	if(a == "" || a == undefined) client.user.setActivity("", {type : ""});
};
