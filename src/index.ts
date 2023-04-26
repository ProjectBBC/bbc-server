import api from "@api/index";
import envConfig from "@config/env-config";
import dictionary from "@utils/dictionary";
import envHelper from "@utils/helpers/env-helper";

console.log(api);
console.log(envConfig);
console.log(dictionary);
console.log(envHelper.isEnvStaging());
console.log(envHelper.isEnvDevelopment());

