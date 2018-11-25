const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let spell = message.content.slice(10);
  playerID = message.author.username;

  let spellData = bot.spells["Spellcasting"]["Spell Descriptions"][spell];

  if(Object.keys(bot.spellbook).includes(playerID) != true){
  bot.spellbook[playerID] = {
  }
  };

  spellName = "undefined";
  if(Object.keys(bot.spells["Spellcasting"]["Spell Descriptions"]).includes(spell)){
    spellName = spell;
  }else{message.channel.send("Not a valid spell! Make sure to check spelling and capitalization (strict entry requirements for now, sorry)!");
  return;
  };

  spellLevel = spellData["content"][0][1];

  var readied = "no";

  console.log(spellLevel);

  bot.spellbook[playerID][spellName] = {
    name: spellName,
    level: spellLevel,
    readied: readied
}

  fs.writeFile("./json/spellbook.json", JSON.stringify(bot.spellbook, null, 4), err => {
    if(err) throw err;
    message.channel.send(`I have added the spell ${spell} to your spellbook!`)
  });
}

module.exports.help = {
  name: "addspell"
}
