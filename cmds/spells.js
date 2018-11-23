const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Spells works");
  let spellname = message.content.slice(8);
  console.log(spellname);
  let spellData = bot.spells["Spellcasting"]["Spell Descriptions"][spellname]["content"];
  let title = [];
  let body = [];
  console.log(spellData[0]);
  for(var j = 1; j < spellData.length; j++){
    title[j] = spellData[j].substring(
      1,
      spellData[j].lastIndexOf("*")
    )
    body[j] = spellData[j].substring(
      spellData[j].lastIndexOf("*") + 1,
      spellData[j].length
    )
  };

  console.log(spellData[1]);
  console.log(title[1]);
  console.log(body[1]);

    var embed = new Discord.RichEmbed()
    .setTitle(`${spellname}`)
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription(spellData[0])
    .setTimestamp()

for(var i = 1; i < 5; i++){
    embed.addField(title[i],body[i]);
  };
    embed.addField("Spell Description",body[5]);
for(var i = 6; i < spellData.length; i++){
    embed.addField(title[i],body[i]);
    }

  message.channel.send({embed});
}

module.exports.help = {
  name: "spells"
}
