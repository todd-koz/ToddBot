const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Spell list works");
  charClass = args[0].charAt(0).toUpperCase() + args[0].slice(1);
  classData = bot.spells["Spellcasting"]["Spell Lists"][`${charClass} Spells`];
  let title = [];
  let body = [];

  console.log(classData["1st Level"]);

    var embed = new Discord.RichEmbed()
    .setTitle(`${charClass} Spell List`)
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription("List of Spells by Class")
    .setTimestamp()
    if(Object.keys(classData).length > 6){
      embed.addField("Cantrips",classData["Cantrips (0 Level)"].join(', '))
    };
    embed.addField("1st Level",classData["1st Level"].join(', '))
    embed.addField("2nd Level",classData["2nd Level"].join(', '))
    embed.addField("3rd Level",classData["3rd Level"].join(', '))
    embed.addField("4th Level",classData["4th Level"].join(', '))
    embed.addField("5th Level",classData["5th Level"].join(', '))
    if(Object.keys(classData).length > 6){
      embed.addField("6th Level",classData["6th Level"].join(', '))
      embed.addField("7th Level",classData["7th Level"].join(', '))
      embed.addField("8th Level",classData["8th Level"].join(', '))
      embed.addField("9th Level",classData["9th Level"].join(', '))
    };
  message.channel.send({embed});
}

module.exports.help = {
  name: "listspells"
}
