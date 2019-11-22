require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'hola') {
    msg.reply('Hola!');
  }
});

client.on('guildMemberAdd', member => {
  const guild = member.guild;
  guild.channels.find(channel => channel.name === "general").send('Bienvenido a nuestro server... how\'s pre season going?' + member);
});

client.login(process.env.BOT_TOKEN);

