const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rollArray = message.content.slice(5).replace(/\s/g, '').split("+");
  console.log(rollArray);
  let outputArray = [];
  let valueArray = [];
  for(var j = 0; j < rollArray.length; j++) {
    if(isNaN(rollArray[j])){
      let diceinfo = rollArray[j].split("d");
      let numdice = diceinfo[0];
      let diceval = diceinfo[1];
      var diceArray = [];

      for(var i = 0; i < numdice; i++){
        let rollresult = Math.floor(Math.random() * diceval) + 1;
        diceArray[i] = rollresult;
      }
      outputArray[j] = diceArray.toString();
      let diceSum = diceArray.reduce((a,b) => a + b, 0);
      valueArray[j] = Number(diceSum);
      message.channel.send(`On your ${rollArray[j]} you rolled ${diceArray.toString()} for a total of ${diceSum}`)
    }else{
      valueArray[j] = Number(rollArray[j]);
    }
  }
  console.log(valueArray);
  let totalSum = valueArray.reduce((a,b) => a + b, 0);
  message.channel.send(`You rolled for a total of **${totalSum}**`);

}

module.exports.help = {
  name: "roll"
}
