import { constants } from "🛠️";
import { ConfigHelperType, ConfigModule, Environments } from "⌨️";

export const getEnvironments: Record<Environments, ConfigHelperType> =
  constants.environments.reduce(
    (acc, env) => ({
      ...acc,
      [env]: {
        isProduction: env === Environments.production,
        isStaging: env === Environments.staging,
        isDevelopment: env === Environments.development,
        notProduction: env !== Environments.production,
        notStaging: env !== Environments.staging,
        notDevelopment: env !== Environments.development,
      },
    }),
    {} as Record<Environments, ConfigHelperType>
  );
