module.exports = { 
    CreateAlert: function(client, serverId, clientId) {
        const Cron = require("node-cron");

        var scheduledMessageCoffeeAlert = new Cron.CronJob('5 0 14 * * 1-5', () => {
            let  server = client.guilds.cache.get(serverId);
            let channel = server.channels.cache.get(clientId);

            const embed = {
                color: 16777215,
                title: 'Coffee Time',
                url: 'https://en.wikipedia.org/wiki/Coffee#/media/File:A_small_cup_of_coffee.JPG',
                author: {
                    name: 'Coffee alert brought to you by Patrick Bot',
                    icon_url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale',
                },
                description: ":coffee::coffee::coffee:\n\nWell would you look at that. It\'s coffee time, who would have thought???\n\n:coffee::coffee::coffee:",
                timestamp: new Date(),
                footer: {
                    text: 'This coffee alert is powered by a cron job'
                },
            };

            channel.send({ embed: embed });
        }, undefined, true, "America/Los_Angeles");

        return scheduledMessageCoffeeAlert;
    }
}