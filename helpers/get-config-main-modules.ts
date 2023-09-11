import { constants } from "🛠️";
import { readdir } from "fs/promises";

export const getConfigMainModules = async () =>
  await readdir(constants.configFolder);
