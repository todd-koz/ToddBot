const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Races works");
  race = args[0].charAt(0).toUpperCase() + args[0].slice(1);
  raceData = bot.races["Races"][race][`${race} Traits`]["content"];
  let title = [];
  let body = [];
  console.log(raceData[0]);
  for(var j = 1; j < raceData.length; j++){
    title[j] = raceData[j].substring(
      1,
      raceData[j].lastIndexOf("*")
    )
    body[j] = raceData[j].substring(
      raceData[j].lastIndexOf("*") + 1,
      raceData[j].lastIndexOf(".") + 1
    )
  };

  console.log(raceData[1]);
  console.log(title[1]);
  console.log(body[1]);

    var embed = new Discord.RichEmbed()
    .setTitle(`${race} Description`)
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription(raceData[0])
    .setTimestamp()

for(var i = 1; i < raceData.length; i++){
    embed.addField(title[i],body[i]);
    }

  message.channel.send({embed});
}

module.exports.help = {
  name: "race"
}
