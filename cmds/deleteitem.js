const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {

  playerID = message.author.username;
  if(message.author.username == "toddkoz" && message.mentions.users.array().length > 0){
    playerID = message.mentions.users.array()[0]["username"];
  };

  let item = args.join(" ");

  if(Object.keys(bot.myitems[playerID]).includes(item) != true){
    message.channel.send(`You don't have ${item} to sell or delete`);
    return;
  }

  console.log(bot.myitems[playerID][item]["quantity"] > 1);

  if(bot.myitems[playerID][item]["quantity"] > 1){
     bot.myitems[playerID][item]["quantity"] = bot.myitems[playerID][item]["quantity"] - 1;
   }else{delete bot.myitems[playerID][item]};

  fs.writeFile("./json/myitems.json", JSON.stringify(bot.myitems, null, 4), err => {
    if(err) throw err;
    console.log(`I have deleted ${item} from the inventory!`);
  });

  message.channel.send(`Deleted ${item}`);
}

module.exports.help = {
  name: "deleteitem"
}
