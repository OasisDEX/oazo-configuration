import { join } from "path";
import { ConfigModule, Environments } from "⌨️";
import { constants, getEnvironments } from "🛠️";

export const parseConfig = async (configModuleFolder: string) => {
  const tempConfigModule = require(join(
    constants.configFolder,
    configModuleFolder,
    "index.ts"
  )).default as ConfigModule;
  return {
    [configModuleFolder]: constants.environments.reduce(
      (acc, env) => ({
        ...acc,
        [env]: {
          ...tempConfigModule(getEnvironments[env]),
        },
      }),
      {} as Record<Environments, ConfigModule>
    ),
  };
};
