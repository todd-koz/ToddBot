const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("User info")
    .addField("ID", message.author.id)
    .addField("Created at", message.author.createdAt)
    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`);

    message.channel.sendEmbed(embed);

}

module.exports.help = {
  name: "userinfo"
}
