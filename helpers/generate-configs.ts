import { createConfigFiles, getConfigMainModules, parseConfig } from "🛠️";
import formatting from "kleur";

const generatingTimeStart = Date.now();

export async function generateConfigs() {
  console.log(
    `\n${formatting.green(
      formatting.italic("Generating Oazo config files 🦾")
    )}\n`
  );
  const configModulesFolders = await getConfigMainModules();
  console.log(
    formatting.italic(
      `Found ${
        configModulesFolders.length
      } config folders: ${configModulesFolders
        .map(formatting.yellow)
        .join(", ")}`
    )
  );
  const configsList = await Promise.all(configModulesFolders.map(parseConfig));
  const configs = configsList.reduce(
    (acc, config) => ({ ...acc, ...config }),
    {}
  );

  const configCreationResults = await createConfigFiles(configs);
  const consoleReportData = configCreationResults.reduce(
    (acc, configCreationResult) => [
      ...acc,
      ...configCreationResult.map(
        ({ configName, configModuleFilePath, env }) => ({
          "Config name": `${configName} (${env})`,
          "Config file path": configModuleFilePath,
        })
      ),
    ],
    []
  );
  console.table(consoleReportData);

  console.log(
    `\n${formatting.green(
      "Oazo config files generated! 🫒"
    )} \n${formatting.green(`Time: ${Date.now() - generatingTimeStart}ms`)}\n`
  );
}
