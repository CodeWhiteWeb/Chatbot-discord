# chatbot-Discord

![F4pEry6](https://nodei.co/npm/chatbot-discord.png?downloads=true&stars=true)

<a href="https://www.npmjs.com/package/chatbot-discord">
<img src="https://img.shields.io/npm/dt/chatbot-discord?color=CC3534&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<a href="https://www.npmjs.com/package/chatbot-discord">
<img src="https://img.shields.io/npm/v/chatbot-discord?color=red&label=Version&logo=npm&style=for-the-badge" alt="Npm version">
</a>

- chatbot-discord is a wrapper for chatbot API that you can use to make a chatbot in node.js specifically created for [discord.js](https://discord.js.org/) created by [Code White Web](https://CodeWhiteWeb.cf)

## Installation

```bash
npm i chatbot-discord
```

## Example

- Note: This example is for a bot that uses [discord.js v12](https://v12.discordjs.guide/).

```javascript
// import packages
const Chat = require("chatbot-discord");
const Discord = require('discord.js');
const client = new Discord.Client();

//assign var
let uid = message.author.id
let msg = message.content

//setup chat
const chat = new Chat({
    user: uid
    name: "Chatari"//name of bot
});

//main chat
chat.chat(msg).then(reply => {
    message.channel.send(reply)
})

//bot login
client.login(process.env.token);
```

## Updates and Info
- Updated Chatbot Wrapper from Production link to [New Link](https://chatbot-api.vercel.app/) And its public now!
- If any bugs found, please report it in the **Discord Server**.

## Support Server

~ [_Chatari's Secret Hallway_](https://discord.gg/fZP4c9pREh)
