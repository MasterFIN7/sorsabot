const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Infoa botista")
  .setColor("#ce00a8")
  .setThumbnail(bicon)
  .addField("Botin nimi", bot.user.username)
  .addField("Luotu", bot.user.createdAt);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
