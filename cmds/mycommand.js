const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

  playerID = message.author.username;
  commandContent = bot.mycommands[playerID]["content"]
  if(args[0]=="tts"){
  message.channel.send(commandContent,{tts: true})}
  else{message.channel.send(commandContent)
  };
};

module.exports.help = {
  name: "mycommand"
}
