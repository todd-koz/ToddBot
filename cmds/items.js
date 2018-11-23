const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let item = message.content.slice(6); //gets the arguments passed after !item

  var itemtype = "undefined";

  if(weaponList.includes(item)){  //checks to see if the item is a weapon
    let itemtype = "Weapons";
  }
  if(armorList.includes(item)){ //checks to see if the item is armor
    let itemtype = "Armor";
  }
  if(adventuringList.includes(item)){
    let itemtype = "Adventuring Gear";
  }
  if(tradeList.includes(item)){
    let itemtype = "Trade Goods";
  }
  if(toolList.includes(item)){
    let itemtype = "Tools";
  }
  if(vehicleList.includes(item)){
    let itemtype = "Vehicle";
  }
  if(otherList.includes(item)){
    let itemtype = "Other";
  }



  let itemData = bot.items["Items"]["Weapons Table"]["table"];
  let itemIndex = itemData["Name"].indexOf(item);

    var embed = new Discord.RichEmbed()
    .setTitle(`${item}`)
    .setAuthor("ToddBot")
    .setColor(0x00AE86)
    .setDescription(`Item description of ${item}`)
    .setTimestamp()
    .addField("Cost",itemData["Cost"][itemIndex])
    .addField("Damage",itemData["Damage"][itemIndex])
    .addField("Weight",itemData["Weight"][itemIndex])
    .addField("Properties",itemData["Properties"][itemIndex])

  message.channel.send({embed});
}

module.exports.help = {
  name: "item"
}
