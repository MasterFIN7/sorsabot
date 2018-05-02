const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  let customembed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setDescription(`${args.join(" ")}`)
  args.join(" ");

  message.delete().catch();
  message.channel.send(customembed);
}

module.exports.help = {
  name: "say"
}
