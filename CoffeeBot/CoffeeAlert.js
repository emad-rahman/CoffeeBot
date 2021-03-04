module.exports = { 
    CreateCoffeeAlertJob: function(client, serverId, clientId) {
        const Cron = require("cron");
        const Gif = require('./Gif');

        var scheduledMessageCoffeeAlert = new Cron.CronJob('58 0 14 * * 1-5', () => {
            let server = client.guilds.cache.get(serverId);
            let channel = server.channels.cache.get(clientId);

            Gif.GetUrl('need coffee').then(url => {
                if(url === undefined) {
                    //do something
                } else {
                    const embed = {
                        color: 16777215,
                        title: 'Coffee Time',
                        description: 
                            ":coffee::coffee::coffee:\n\n" + 
                            "Well would you look at that. It\'s coffee time!" + 
                            "\n\n:coffee::coffee::coffee:",
                        image: {
                            url: url,
                        },
                        timestamp: new Date(),
                    };
                
                    channel.send({ embed: embed });
                }
            }).catch(console.error);
        }, undefined, true, "America/Los_Angeles");

        return scheduledMessageCoffeeAlert;
    }
}
