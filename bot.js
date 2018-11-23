const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.races = require("./json/races.json");
bot.spells = require("./json/spells.json");
bot.items = require("./json/items2.json");
bot.myitems = require("./json/myitems.json");

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
})

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);

  try {
      let link = await bot.generateInvite(["ADMINISTRATOR"]);
      console.log(link);
      } catch(e) {
        console.log(e.stack);
      }
    });

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0]; //the command is just the first word in a message
  let args = messageArray.slice(1); //the args are all words after the command word

  //console.log(message.content);
  //console.log(messageArray);
  //console.log(command);
  //console.log(args);

  if(!command.startsWith(botSettings.prefix)) return; //only check for commands beginning with the prefix, here !

  let cmd = bot.commands.get(command.slice(prefix.length)); //slices the prefix off the command word
  if(cmd) cmd.run(bot, message, args);

  if(command === `${prefix}cletus`) {
    message.channel.send("Well tickle my tits, Cletus the Farm-raised motherfucker is up in this joint and he's not here to make friends, just get goat bitches and make bank. Roll for initiative dickwads.", {
   tts: true
  })
  }

  if(command === `${prefix}batrach`) {
    message.channel.send("how much wood could a woodchuck chuck if a woodchuck could go fuck yourself Will", {
   tts: true
  })
  }
//  if(command === `${prefix}neil`) {
//    message.channel.send("I think Tyrene should belong to the goblins!")
//  }

  //if(command === `${prefix}1d20`) {
    //let rollresult = Math.floor(Math.random() * 20) + 1;
    //if(rollresult == 1) {
      //message.reply('you rolled a 1, get fucked.')
    //}
    //if (rollresult == 20) {
      //message.reply('holy shit, a nat 20!')
    //}
    //if (rollresult !=1 && rollresult !=20) {
    //message.reply(`you rolled a ${rollresult}`);
  //}
//}

});

bot.login(botSettings.token);
