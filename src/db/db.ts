import * as mongoose from "mongoose";
import envConfig from "@config/env-config";

const connect = async () => {
  try {
    let uri = "mongodb://";
    if (envConfig.MONGO_AUTH) {
      uri += `${envConfig.MONGO_USERNAME}:${envConfig.MONGO_PASSWORD}@`;
    }
    uri += `${envConfig.MONGO_HOST}:${envConfig.MONGO_PORT}/${envConfig.MONGO_DB}`;
    await mongoose.connect(uri);

    console.log("Database successfully connected!");
  } catch (e) {
    console.error(e);
  }
};

export default { connect };

