import { ConfigModule, Environments } from "⌨️";
import { constants, getEnvironments } from "🛠️";
import { join } from "path";

export const parseConfig = async (configModuleFolder: string) => {
  const { default: tempConfigModule } = (await import(
    join(constants.configFolder, configModuleFolder, "index.ts")
  )) as { default: ConfigModule };
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
