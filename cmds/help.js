const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

  var embed = new Discord.RichEmbed()
  .setTitle("Bot Help")
  .setAuthor(message.author.username)
  .setColor(0x00AE86)
  .setDescription("Please choose a specific help command for more information on items, spells, ... : !help items , !help spells , ...")
  .addField("!roll <dice>", "rolls unlimited number of dice and additive modifiers")
  .addField("!races <race name>", "look up table for race information, limited functionality")

  if(args[0]=="items"){
  embed.setDescription("Item Help")
  embed.addField("!item <item name>", "displays properties of the item")
  embed.addField("!additem <item name>", "adds an item to your personal inventory")
  embed.addField("!deleteitem <item name>" , "removes an item to your personal inventory")
  embed.addField("!showitems <item name>", "displays your personal inventory, plus its market value, total carry weight, and coinpurse")
  embed.addField("!buyitem <item name>", "buys an item (adds an item, removes coin)")
  embed.addField("!sellitem <item name>", "sells an item (removes item, adds coin)")
  embed.addField("!addcoin <value>", "adds (and in the case of negative numbers, removes) coin from your coinpurse")
  embed.setTimestamp()
  };
  if(args[1]=="spells"){
  embed.setDescription("Spell Help")
  embed.addField("!spells <spell name>", "displays spell properties, limited functionality...")
  embed.addField("!addspell <spell name>", "adds spell to your spellbook")
  embed.addField("!spellbook", "displays the spells in your spellbook and their level")
  embed.addField("!readyspell <spell name>", "FEATURE NOT IMPLEMENTED")
  embed.addField("!cast <spellname>", "FEATURE NOT IMPLEMENTED")
  embed.addField("!listspells <class name>", "lists all spells that can be learned by that class")
  };
message.channel.send({embed});
}

module.exports.help = {
  name: "help"
}
