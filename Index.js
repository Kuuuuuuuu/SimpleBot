const Eris = require("eris");

const bot = new Eris(process.env.DISCORD_BOT_TOKEN);

bot.on("messageCreate", msg => {
  if (msg.content === "ping") {
    bot.createMessage(msg.channel.id, "pong!");
  }
});

bot.on("messageCreate", msg => {
  if (msg.content === "pong") {
    bot.createMessage(msg.channel.id, "ping!");
  }
});

bot.connect();
