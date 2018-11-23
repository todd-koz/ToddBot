const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let item = message.content.slice(9);
  let itemData = bot.items["Items"]["Weapons Table"]["table"];
  let itemIndex = itemData["Name"].indexOf(item);

  bot.myitems[item] = {
    name: itemData["Name"][itemIndex],
    damage: itemData["Damage"][itemIndex],
    cost: itemData["Cost"][itemIndex],
    weight: itemData["Weight"][itemIndex],
    properties: itemData["Properties"][itemIndex]
  }

  fs.writeFile("./json/myitems.json", JSON.stringify(bot.myitems, null, 4), err => {
    if(err) throw err;
    message.channel.send("I have added this item!")
  });
}

module.exports.help = {
  name: "additem"
}
