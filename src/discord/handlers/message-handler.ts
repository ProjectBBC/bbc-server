import { Client, GatewayDispatchEvents } from "@discordjs/core";
import moment from "moment";

const messageHandler = (client: Client) => {
  client.on(GatewayDispatchEvents.MessageCreate, async ({
    data,
    api,
  }) => {
    if (data.author.bot) return;

    const orderDate = moment().format("DD.MM.YYYY HH:mm");
    const content = `🚨💰🚨 New order placed **#${Math.ceil(Math.random() * 5329852)}** (${orderDate})`;
    const message = await api.channels.createMessage(data.channel_id, { content });

    await api.channels.addMessageReaction(
      data.channel_id,
      message.id,
      "👍",
    );
    await api.channels.addMessageReaction(
      data.channel_id,
      message.id,
      "👎",
    );
  });
};

export default messageHandler;
