const Discord = require('discord.js');
const client = new Discord.Client();

const Config = require('./CoffeeBot/Config');
const CoffeeAlert = require('./CoffeeBot/CoffeeAlert');

client.once('ready', () => {
    console.log('Ready!');
    CoffeeAlert.CreateCoffeeAlertJob(client, Config.DiscordServerId(), Config.DiscordClientId()).start();
});

client.login(Config.BotToken());