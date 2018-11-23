const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Showing inventory!");

  let name = [];
  let cost = [];
  let weight = [];

  console.log(Object.keys(bot.myitems)[1]);

  for(i=0;i<Object.keys(bot.myitems).length;i++){
    name[i] = bot.myitems[Object.keys(bot.myitems)[i]].name;
    cost[i] = parseInt(bot.myitems[Object.keys(bot.myitems)[i]].cost);
    weight[i] = bot.myitems[Object.keys(bot.myitems)[i]].weight;
  }
    let inventoryValue = cost.reduce((a,b) => a + b, 0) / 2;
    console.log(`Total value of items is ${inventoryValue}`);
    var embed = new Discord.RichEmbed()
    .setTitle("Inventory")
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription(name.join('\n'))
    .setTimestamp()
    .addField("Inventory Market Value",`${inventoryValue} gp.`)
    // embed.addField("Cost",cost.join(', '))
    // embed.addField("Weight",cost.join(', '))

  message.channel.send({embed});
}

module.exports.help = {
  name: "showitems"
}
