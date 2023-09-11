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

type ConfigModulePiece =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [name: string]: ConfigModulePiece }
  | ConfigModulePiece[];
export type ConfigModule = (
  args: ConfigHelperType
) => Record<string, ConfigModulePiece>;
