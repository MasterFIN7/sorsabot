const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL;
  let sEmbed = new Discord.RichEmbed()
  .setDescription("Palvelimen info")
  .setColor("#ce00a8")
  .setThumbnail(sicon)
  .addField("Palvelimen nimi", message.guild.name)
  .addField("Luotu", message.guild.createdAt)
  .addField("Sinä liityit", message.member.joinedAt)
  .addField("Kaikki käyttäjät", message.guild.memberCount)
  .addField("Palvelimen omistaja", message.guild.owner);

  return message.channel.send(sEmbed);

}

module.exports.help = {
  name: "serverinfo"
}
