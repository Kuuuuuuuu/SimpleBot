const Eris = require("eris");

var bot = new Eris(process.env.TOKEN);


bot.on("ready", () => { 
    console.log("Ready to Use Now!");
});

bot.on("error", (error) => {
  console.error(error);
});

bot.on("messageCreate", (msg) => { 
    if(msg.content === "!ping") { 
        bot.createMessage(msg.channel.id, "pong");
    } else if(msg.content === "!pong") {
        bot.createMessage(msg.channel.id, "ping!");
    }
});

bot.connect(); // Login 
