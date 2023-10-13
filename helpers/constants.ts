import path = require("path");
import { Environments } from "⌨️";

export const constants = {
  environments: [
    Environments.development,
    Environments.production,
    Environments.staging,
  ],
  configFolder: path.join(__dirname, "../configs"),
  distFolder: path.join(__dirname, "../dist"),
};


