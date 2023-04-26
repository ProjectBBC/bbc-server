import discord from "@discord/discord";

const start = async () => {
  // await db.connect();
  // await api.listen(envConfig.LISTEN_PORT);

  await discord.init();
};

start();
