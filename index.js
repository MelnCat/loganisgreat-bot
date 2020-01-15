const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const package = require("./package.json")
const moment = require('moment');
const updates = require('./updates.json') 
const entries = Object.entries(updates);
const lastupd = entries[entries.length - 1].join(": ")
const allupd = Object.entries(updates).map(x=>x.join(": "))
const prefix = config.prefix
function datedata() {
    return moment().format('MM/DD/YYYY hh:mm:ss')
}
//TEMPLATE LITERALS: 
// ${client.guilds.size} Number of Servers joined
// ${client.users.size} Number of Users
// ${client.channels.size} Number of Channels usable
// ${datedata()} gets date and time
// ${message.author} gets message author
// ${message.guild} gets message guild
// ${message.channel} gets message channel
// ${package.version} gets version
// ${package.name} gets name
// ${package.author} gets author


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`!help on ${client.guilds.size} servers`);
});
client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


if (command === "help"){
    message.channel.send(`*Help Menu:* \n **PREFIX IS: ${config.prefix}** \n **help:** Get a list of commands. \n **ping:** Play Ping-Pong! \n **bird:** See a pretty bird! \n **version:** How old am I? \n **version_advanced:** How old am I really? \n **invite:** Add me to your server! \n **show_me_the_numbers:** How many people use me? \n **updates:** Recent Updates! \n **credits:** Who made me?`)
    console.log(`help-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

if (command === "ping"){
    message.reply("Pong")
    console.log(`ping-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

if (command === "bird"){
    message.channel.send("Ponghttps://cdn.discordapp.com/attachments/407697440087736320/665693213784408064/image0.jpg")
    console.log(`bird-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

   if (command === "invite"){
    message.reply("https://discordapp.com/oauth2/authorize?client_id=665613859645554724&scope=bot&permissions=102206785")
    console.log(`invite-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

   if (command === "version"){
    message.channel.send(`Bot version: ${package.version}`)
    console.log(`version-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

   if (command === "show_me_the_numbers"){
    message.channel.send(`Servers: ${client.guilds.size} Users: ${client.users.size} Channels: ${client.channels.size}`)
    console.log(`show_me_the_numbers-${datedata()}-${message.author}-${message.guild}-${message.channel} \n Guilds: ${client.guilds.size} Users: ${client.users.size} Channels: ${client.channels.size}`)
   };

   if (command === "version_advanced"){
    message.channel.send(`Bot version: ${package.version} Discord.js Version: ${Discord.version} Moment Version: ${moment.version}`)
    console.log(`version_advanced-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

   if (command === "updates"){
       message.channel.send(lastupd)
       console.log(`updates-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };

   if (command === "updates_all"){
    message.channel.send(allupd)
    console.log(`updates_all-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
};

   if (command === "credits"){
    message.channel.send(`I was made by ${package.author} using discord.js and moment library. Special thanks to the helpers at discord.js who helped me build this wonderful piece of code.`)
    console.log(`credits-${datedata()}-${message.author}-${message.guild}-${message.channel}`)
   };
}); client.login(config.token)
