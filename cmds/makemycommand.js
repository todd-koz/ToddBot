const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  commandContent = message.content.slice(15);
  playerID = message.author.username;
  bot.mycommands[playerID] = {
    content: commandContent
};

  fs.writeFile("./json/mycommands.json", JSON.stringify(bot.mycommands, null, 4), err => {
    if(err) throw err;
    message.channel.send(`I have added a command for ${playerID}! Execute it with !mycommand.`)
  });

}

module.exports.help = {
  name: "makemycommand"
}
