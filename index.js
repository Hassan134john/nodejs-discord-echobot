const fs = require('fs');
const {prefix} = require('./config.json');
const Discord = require('discord.js'); //import discord.js
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



//make sure this line is the last line
client.login(process.env.token); //login bot using token
