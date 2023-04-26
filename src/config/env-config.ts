import * as process from "process";
import "@config/import-dot-env";

const envConfig = {
  environment: process.env.NODE_ENV,
  LISTEN_PORT: Number(process.env.LISTEN_PORT),
  MONGO_AUTH: process.env.MONGO_AUTH === "true",
  MONGO_USERNAME: String(process.env.MONGO_USERNAME),
  MONGO_PASSWORD: String(process.env.MONGO_PASSWORD),
  MONGO_DB: String(process.env.MONGO_DB),
  MONGO_HOST: String(process.env.MONGO_HOST),
  MONGO_PORT: Number(process.env.MONGO_PORT),
  DISCORD_BOT_TOKEN: String(process.env.DISCORD_BOT_TOKEN),
};

export default envConfig;

