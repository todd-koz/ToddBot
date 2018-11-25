const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Showing inventory!");

  let name = [];
  let cost = [];
  let weight = [];

  for(i=0;i<Object.keys(bot.myitems[message.author.username]).length;i++){
    if(bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].quantity>1){
        name[i] = `${bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].name} (${name[i] = bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].quantity})`;
    }else{name[i] = bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].name;};
    cost[i] = parseInt(bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].cost) * bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].quantity;
    weight[i] = parseInt(bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].weight) * bot.myitems[message.author.username][Object.keys(bot.myitems[message.author.username])[i]].quantity;
  }
    let inventoryValue = cost.reduce((a,b) => a + b, 0) / 2;
    console.log(`Total value of items is ${inventoryValue}`);
    let inventoryWeight = weight.reduce((a,b) => a + b, 0);
    console.log(`Total weight of items is ${inventoryWeight}`);
    var embed = new Discord.RichEmbed()
    .setTitle("Inventory")
    .setAuthor(message.author.username)
    .setColor(0x00AE86)
    .setDescription(name.join('\n'))
    .setTimestamp()
    .addField("Inventory Market Value",`${inventoryValue} gp.`)
    .addField("Inventory Weight",`${inventoryWeight} lb.`)
    .addField("Purse", `${bot.mypurse[message.author.username]["value"]} gp.`)
    // embed.addField("Cost",cost.join(', '))
    // embed.addField("Weight",cost.join(', '))

  message.channel.send({embed});
}

module.exports.help = {
  name: "showitems"
}
