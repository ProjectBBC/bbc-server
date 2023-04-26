import { Client, GatewayDispatchEvents } from "@discordjs/core";

const reactionHandler = (client: Client) => {
  client.on(GatewayDispatchEvents.MessageReactionAdd, async ({
    data,
    api,
  }) => {
    if (data.member.user.bot) return;

    const message = await api.channels.getMessage(data.channel_id, data.message_id);
    const orderId = message.content.split("🚨💰🚨 New order placed ")[1];

    if (!orderId) return;

    let content = "";
    if (data.emoji.name === "👍") {
      content = `👍 Order ${orderId} accepted!`;
    }
    if (data.emoji.name === "👎") {
      content = `👎 Order ${orderId} rejected!`;
    }

    await api.channels.createMessage(data.channel_id, { content });

    await api.channels.deleteAllMessageReactions(data.channel_id, data.message_id);
  });
};

export default reactionHandler;
