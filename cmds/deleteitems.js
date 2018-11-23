const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {

  let index = message.content.slice(12);
  console.log(index);
  console.log(bot.myitems[index]);

  delete bot.myitems[index];

  fs.writeFile("./json/myitems.json", JSON.stringify(bot.myitems, null, 4), err => {
    if(err) throw err;
    console.log(`I have deleted ${index} from the inventory!`);
  });

  message.channel.send(`Deleted ${index}`);
}

module.exports.help = {
  name: "deleteitem"
}
