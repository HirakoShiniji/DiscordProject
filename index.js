const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`gotcha bud. ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    console.log(`got a ping ${client.user.login}!`);
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  
    
    msg.reply(`${msg.content}`);
  
});
client.login('NTQ2NzA2MjYzODQxNTcwODI2.D1WKhQ.BCiu5LE8t8A1aEntJw0SbTvplFk');
