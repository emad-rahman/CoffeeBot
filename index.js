const Discord = require('discord.js');
const client = new Discord.Client();

const Config = require('./CoffeeBot/Config');
const CoffeeAlert = require('./CoffeeBot/CoffeeAlert');

client.once('ready', () => {
    console.log('Ready!');
    CoffeeAlert.CreateCoffeeAlertJob(client, Config.DiscordServerId(), Config.DiscordClientId()).start();
});

client.on('message', msg => {
    if (msg.mentions.has(client.user)) {
        msg.channel.send("Hi, I'm coffee bot!");
    }
});

client.login(Config.BotToken());
