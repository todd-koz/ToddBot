const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {

  playerID = message.author.username;
  if(message.author.username == "toddkoz" && message.mentions.users.array().length > 0){
    playerID = message.mentions.users.array()[0]["username"];
  };

  if(Object.keys(bot.mypurse).includes(playerID) != true){
  bot.mypurse[playerID] = {
    owner: playerID,
    value: 0,
    }
  }


  if((bot.mypurse[playerID]["value"])==null){
    bot.mypurse[playerID]["value"] = 0;
  };
  console.log(`adding ${args[0]} gp`)
  console.log(bot.mypurse[playerID]["value"]);
  if(Object.keys(bot.mypurse).includes(playerID)){
    purseValue = parseInt(bot.mypurse[playerID]["value"]) + parseInt(args[0]);
  }else{purseValue = parseInt(args[0])};

  console.log(`item purse value is now ${purseValue}`);

  bot.mypurse[playerID] = {
    owner: playerID,
    value: purseValue,
  }

  fs.writeFile("./json/mypurse.json", JSON.stringify(bot.mypurse, null, 4), err => {
    if(err) throw err;
    message.channel.send(`I have added ${args[0]} gp to the purse of ${playerID}!`);
  });


  var embed = new Discord.RichEmbed()
  .setTitle("Coin Purse")
  .setAuthor("ToddBot")
  .setColor(0x00AE86)
  .setDescription(`Purse of ${playerID} is ${purseValue} gp.`)
  .setTimestamp()

  message.channel.send({embed});
}

module.exports.help = {
  name: "addcoin"
}
