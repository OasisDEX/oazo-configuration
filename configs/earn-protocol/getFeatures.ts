import { ConfigHelperType } from "⌨️";

export const getFeatures = ({
  isStaging,
  isDevelopment,
}: ConfigHelperType) => ({
  Migrations: isStaging || isDevelopment,
  Send: true,
});
