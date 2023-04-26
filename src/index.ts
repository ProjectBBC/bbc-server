import db from "@db/db";
import api from "@api/api";
import envConfig from "@config/env-config";

const start = async () => {
  await db.connect();
  await api.listen(envConfig.LISTEN_PORT);
};

start();
