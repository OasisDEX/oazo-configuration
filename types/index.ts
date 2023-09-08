export enum Environments {
  development = "development",
  production = "production",
  staging = "staging",
}

export type ConfigHelperType = {
  isProduction: boolean;
  isStaging: boolean;
  isDevelopment: boolean;
  notProduction: boolean;
  notStaging: boolean;
  notDevelopment: boolean;
};

export type ConfigModule = (args: ConfigHelperType) => Record<string, any>;
