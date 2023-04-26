import envConfig from "@config/env-config";
import dictionary from "@utils/dictionary";

const envHelper = {
  isEnvDevelopment: (): boolean => envConfig.environment === dictionary.config.env.development,
  isEnvStaging: (): boolean => envConfig.environment === dictionary.config.env.staging,
  isEnvProduction: (): boolean => envConfig.environment === dictionary.config.env.production,
};

export default envHelper;
