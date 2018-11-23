const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let item = message.content.slice(9);

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

  keyname1 = Object.keys(itemData)[1];

  bot.myitems[item] = {
    name: itemData[Object.keys(itemData)[0]][itemIndex],
    cost: itemData[Object.keys(itemData)[1]][itemIndex],
    weight: itemData[Object.keys(itemData)[2]][itemIndex],
  }

  fs.writeFile("./json/myitems.json", JSON.stringify(bot.myitems, null, 4), err => {
    if(err) throw err;
    message.channel.send("I have added this item!")
  });
}

module.exports.help = {
  name: "additem"
}
