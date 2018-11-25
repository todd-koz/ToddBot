const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let item = message.content.slice(9);

  playerID = message.author.username;
  if(message.author.username == "toddkoz" && message.mentions.users.array().length > 0){
    playerID = message.mentions.users.array()[0]["username"];
  };


  let weaponList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  let armorList = bot.items["Items"]["Armor Table"]["table"]["Name"];
  let adventuringList = bot.items["Items"]["Adventuring Gear Table"]["table"]["Name"];

  itemtype = "undefined";

  console.log(item);

  if(weaponList.includes(item)){  //checks to see if the item is a weapon
    itemtype = "Weapons";
    console.log("added a weapon");
  };
  if(armorList.includes(item)){ //checks to see if the item is armor
    itemtype = "Armor";
    console.log("added armor");
  };
  if(adventuringList.includes(item)){
    itemtype = "Adventuring Gear";
    console.log("added adventuring gear")
  };

  if(itemtype=="undefined"){
    message.channel.send("Not a valid item! Make sure to check spelling and capitalization (strict entry requirements for now, sorry)!");
    return;
  };

  let itemData = bot.items["Items"][`${itemtype} Table`]["table"];
  let itemIndex = itemData["Name"].indexOf(item);

  if(Object.keys(bot.myitems).includes(playerID) != true){
  bot.myitems[playerID] = {
    
      }
}


  console.log(typeof bot.myitems[playerID] != "undefined");
  if (typeof bot.myitems[playerID] != "undefined") {
  if(Object.keys(bot.myitems[playerID]).includes(item)){
     itemQuantity = bot.myitems[playerID][item]["quantity"] + 1;
   }else{itemQuantity = 1}}else{itemQuantity = 1};
   console.log(itemQuantity);


bot.myitems[playerID][item] = {
    name: itemData[Object.keys(itemData)[0]][itemIndex],
    cost: itemData[Object.keys(itemData)[1]][itemIndex],
    weight: itemData[Object.keys(itemData)[2]][itemIndex],
    quantity: itemQuantity
}

  fs.writeFile("./json/myitems.json", JSON.stringify(bot.myitems, null, 4), err => {
    if(err) throw err;
    message.channel.send(`I have added ${item} to your inventory!`)
  });
}

module.exports.help = {
  name: "additem"
}
