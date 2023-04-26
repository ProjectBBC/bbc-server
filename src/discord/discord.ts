import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { Client, GatewayDispatchEvents, GatewayIntentBits } from "@discordjs/core";
import envConfig from "@config/env-config";
import messageHandler from "@discord/handlers/message-handler";
import reactionHandler from "@discord/handlers/reaction-handler";

const rest = new REST({ version: "10" })
  .setToken(envConfig.DISCORD_BOT_TOKEN);
const ws = new WebSocketManager({
  token: envConfig.DISCORD_BOT_TOKEN,
  intents: GatewayIntentBits.GuildMessages
    | GatewayIntentBits.MessageContent
    | GatewayIntentBits.GuildMessageReactions,
  rest,
});

const discord = {
  client: new Client({
    rest,
    ws,
  }),
  async init() {

    await messageHandler(discord.client);
    await reactionHandler(discord.client);

    // Listen for the ready event
    discord.client.once(GatewayDispatchEvents.Ready, () => console.log("Discord bot ready!"));

    // Start the WebSocket connection.
    ws.connect();
  },
};

export default discord;
