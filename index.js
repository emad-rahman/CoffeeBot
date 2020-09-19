const Discord = require('discord.js');
const client = new Discord.Client();

const Config = require('./CoffeeBot/Config');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(Config.BotToken());