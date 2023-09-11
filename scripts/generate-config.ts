#!/usr/bin/env ts-node

import { constants } from "🛠️";
import { readdir } from "fs/promises";
import formatting from "kleur";

// This will create a single `config.json` file

const allowedEnvNames = ["development", "production", "staging"];

async function generateConfig() {
  const allowedConfigNames = await readdir(constants.distFolder);
  console.log("allowedConfigNames", allowedConfigNames);
  const envName = process.argv[3];
  const configName = process.argv[2];
  if (!allowedEnvNames.includes(envName)) {
    throw new Error(
      `Invalid environment name. Allowed names: ${allowedEnvNames.join(", ")}`
    );
  }
  if (!allowedConfigNames.includes(configName)) {
    throw new Error(
      `Invalid config name. Allowed names: ${allowedConfigNames.join(", ")}`
    );
  }
  console.log(
    formatting.cyan(
      `Generating ${configName} config for ${envName} environment`
    )
  );
}

generateConfig();
