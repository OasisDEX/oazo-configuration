import { ConfigModule, Environments } from "⌨️";
import { existsSync, mkdirSync, promises } from "fs";

export const createConfigFiles = async (configs: {
  [configName: string]: Record<Environments, ConfigModule>;
}) => {
  const configCreationResults = await Object.entries(configs).map(
    ([configName, config]) => {
      const configCreationResult = Object.entries(config).map(
        ([env, configModule]) => {
          const configModuleString = JSON.stringify(configModule, null, 2);
          const configModuleFolderPath = `./dist/${configName}`;
          const configModuleFilePath = `./dist/${configName}/${configName}-${env}.json`;
          if (!existsSync(configModuleFolderPath)) {
            mkdirSync(configModuleFolderPath, { recursive: true });
          }
          const saveFile = promises.writeFile(
            configModuleFilePath,
            configModuleString,
            {
              encoding: "utf-8",
            }
          );
          if (!saveFile) {
            throw new Error(
              `Error while saving config file: ${configModuleFilePath}`
            );
          }
          return {
            configName,
            env,
            configModuleFilePath,
          };
        }
      );
      return configCreationResult;
    }
  );
  return configCreationResults;
};
