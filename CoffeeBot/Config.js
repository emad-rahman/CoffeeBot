module.exports = { 
    BotToken: function() {
        if (IsProd()) {
            return process.env.BOT_TOKEN;
        } else {
            const config = require("../local-config.json");
            return config.token;
        }
    }
}

function IsProd() {
    return process.env.PROD_IDENTIFIER !== undefined;
}