const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Showing spellbook!");

  let name = [];
  let level = [];
  let readied = [];

  for(i=0;i<Object.keys(bot.spellbook[message.author.username]).length;i++){

    name[i] = bot.spellbook[message.author.username][Object.keys(bot.spellbook[message.author.username])[i]].name;
    level[i] = parseInt(bot.spellbook[message.author.username][Object.keys(bot.spellbook[message.author.username])[i]].level);
    readied[i] = bot.spellbook[message.author.username][Object.keys(bot.spellbook[message.author.username])[i]].readied;

  };
//    let inventoryValue = cost.reduce((a,b) => a + b, 0) / 2;
//    console.log(`Total value of items is ${inventoryValue}`);
//    let inventoryWeight = weight.reduce((a,b) => a + b, 0);
//    console.log(`Total weight of items is ${inventoryWeight}`);
    var embed = new Discord.RichEmbed()
    .setTitle("My Spellbook")
    .setAuthor(message.author.username)
    .setColor(0x00AE86)
    .setDescription(" ")
    .setTimestamp()
    .addField("Spell List",name.join('\n'),true)
    .addField("Level",level.join('\n'),true)
//    .addField("Inventory Market Value",`${inventoryValue} gp.`)
//    .addField("Inventory Weight",`${inventoryWeight} lb.`)
//    .addField("Purse", `${bot.mypurse[message.author.username]["value"]} gp.`)
    // embed.addField("Cost",cost.join(', '))
    // embed.addField("Weight",cost.join(', '))
    // embed.fields[0].inline = true;
    // embed.fields[1].inline = true;

  message.channel.send({embed});
}

module.exports.help = {
  name: "spellbook"
}
