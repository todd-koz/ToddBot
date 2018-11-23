const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log("Item query logged");

  let item = message.content.slice(6); //gets the arguments passed after !item

  let weaponList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  let armorList = bot.items["Items"]["Armor Table"]["table"]["Name"];
  let adventuringList = bot.items["Items"]["Adventuring Gear Table"]["table"]["Name"];

  console.log(weaponList);
  // let adventuringList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  // let tradeList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  // let toolList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  // let vehicleList = bot.items["Items"]["Weapons Table"]["table"]["Name"];
  // let otherList = bot.items["Items"]["Weapons Table"]["table"]["Name"];

  itemtype = "undefined";

  console.log(item);

  if(weaponList.includes(item)){  //checks to see if the item is a weapon
    itemtype = "Weapons";
    console.log("it's a weapon");
  };
  if(armorList.includes(item)){ //checks to see if the item is armor
    itemtype = "Armor";
    console.log("it's an armor");
  };
  if(adventuringList.includes(item)){
    itemtype = "Adventuring Gear";
  };
  // if(tradeList.includes(item)){
  //   let itemtype = "Trade Goods";
  // }
  // if(toolList.includes(item)){
  //   let itemtype = "Tools";
  // }
  // if(vehicleList.includes(item)){
  //   let itemtype = "Vehicle";
  // }
  // if(otherList.includes(item)){
  //   let itemtype = "Other";
  // }
  console.log(itemtype);

  if(itemtype=="undefined"){
    message.channel.send("Not a valid item! Make sure to check spelling and capitalization (strict entry requirements for now, sorry)!");
    return;
  };


  let itemData = bot.items["Items"][`${itemtype} Table`]["table"];
  let itemIndex = itemData["Name"].indexOf(item);

    var embed = new Discord.RichEmbed()
    .setTitle(`${item}`)
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription(itemtype)
    .setTimestamp()
    .addField(Object.keys(itemData)[1],itemData[Object.keys(itemData)[1]][itemIndex])
    .addField(Object.keys(itemData)[2],itemData[Object.keys(itemData)[2]][itemIndex])
    .addField(Object.keys(itemData)[3],itemData[Object.keys(itemData)[3]][itemIndex])
    if(Object.keys(itemData).length>4){
        embed.addField(Object.keys(itemData)[4],itemData[Object.keys(itemData)[4]][itemIndex])
    };
    if(Object.keys(itemData).length>5){
        embed.addField(Object.keys(itemData)[5],itemData[Object.keys(itemData)[5]][itemIndex])
    };
    if(Object.keys(itemData).length>6){
        embed.addField(Object.keys(itemData)[6],itemData[Object.keys(itemData)[6]][itemIndex])
    };

  message.channel.send({embed});
}

module.exports.help = {
  name: "item"
}
