import { readdir } from "fs/promises";
import { constants } from "🛠️";

export const getConfigMainModules = async () =>
  await readdir(constants.configFolder);
