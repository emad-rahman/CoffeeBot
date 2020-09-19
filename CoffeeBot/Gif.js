module.exports = { 
    GetUrl: async function(query) {
        const Config = require('./Config');
        const Tenor = require("tenorjs").client({
            "Key": Config.TenorApiKey(), // https://tenor.com/developer/keyregistration
            "Filter": "high", // "off", "low", "medium", "high", not case sensitive
            "Locale": "en_US", // Your locale here, case-sensitivity depends on input
            "MediaFilter": "minimal", // either minimal or basic, not case sensitive
            "DateFormat": "YYYY-MM-DD - H:mm:ss A" // Change this accordingly
        });

        var url = await Tenor.Search.Random(query, "1").then(Results => {
            if (Results) {
                if (Results[0] === undefined) {
                    return GetUrl(query);
                }
    
                return Results[0].media[0]["gif"].url;
            }
        }).catch(console.error);
    
        return url
    }
}