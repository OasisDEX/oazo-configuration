import { ConfigHelperType } from "⌨️";

export const getFeatures = ({
  isStaging: _isStaging,
  isDevelopment,
  isProduction,
}: ConfigHelperType) => ({
  Migrations: true,
  Send: true,
  FilterZeroTokenVaults: isProduction, // filter out zero token vaults on production
  VaultSwitching: isDevelopment, // enable vault switching in development
});
