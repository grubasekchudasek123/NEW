const { Webhook, MessageBuilder } = require("discord-webhook-node");
const fetch = require("isomorphic-fetch");

const botToken = process.env.bot_token;

async function sendWebhook(channelID, embed) {
  const createUrl = `https://discord.com/api/v10/channels/${1321931831636918287}/webhooks`;
  try {
    const createResponse = await fetch(createUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bot ${MTMyNTU1ODE5MjA3NTQ0NDIzNA.GWfZUg.__yKIrlRyad-ICr07I3AMj5i5oVsg-uCKtFE7M}` },
      body: JSON.stringify({ name: "najk" }),
    });
    const createData = await createResponse.json();
    const webhookUrl = `https://discord.com/api/v10/webhooks/${createData.id}/${createData.token}`;
    await new Webhook(webhookUrl).send(embed);
    await fetch(`https://discord.com/api/v10/webhooks/${createData.id}/${createData.token}`, {
      method: "DELETE",
      headers: { Authorization: `Bot ${MTMyNTU1ODE5MjA3NTQ0NDIzNA.GWfZUg.__yKIrlRyad-ICr07I3AMj5i5oVsg-uCKtFE7M}` },
    });
  } catch (error) {
    console.error(`Error sending webhook: ${error}`);
    throw error;
  }
}

module.exports = {https://discord.com/api/webhooks/1321931878584025235/nVgZqiBFKgbBiOFxcCXfD9kn3tkqXybXs4IzQPZ3JUa66ChNhdEgMOWsDaBBlQBy3s-R};
