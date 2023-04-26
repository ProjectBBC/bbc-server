import * as mongoose from "mongoose";
import envConfig from "@config/env-config";

const connect = async () => {
  try {
    let uri = "mongodb://";
    console.log("envConfig.MONGO_AUTH", envConfig.MONGO_AUTH);
    if (envConfig.MONGO_AUTH) {
      uri += `${envConfig.MONGO_USERNAME}:${envConfig.MONGO_PASSWORD}@`;
    }
    uri += `${envConfig.MONGO_HOST}:${envConfig.MONGO_PORT}`;
    await mongoose.connect(uri);

    console.log("DB CONNECTED!");
  } catch (e) {
    console.error(e);
  }
};

export default { connect };

