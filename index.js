const Discord = require('discord.js');
const client = new Discord.Client();

const Config = require('./CoffeeBot/Config');
var cron = require('node-cron');

const serverId = '725151611625799803';
const clientId = '725151612057813046';

const Gif = require('./CoffeeBot/Gif');

client.once('ready', () => {
    console.log('Ready!');

    let  server = client.guilds.cache.get(serverId);
    let channel = server.channels.cache.get(clientId);

    Gif.GetUrl('need coffee').then(url => {
        if(url === undefined) {
            console.log("url was undefined");
        } else {
            console.log("url: " + url);
            const embed = {
                color: 16777215,
                title: 'Coffee Time',
                description: ":coffee::coffee::coffee:\n\nWell would you look at that. It\'s coffee time, who would have thought???\n\n:coffee::coffee::coffee:",
                image: {
                    url: url,
                },
                timestamp: new Date(),
            };
        
            channel.send({ embed: embed });
        }
    }).catch(console.error);
});

client.login(Config.BotToken());