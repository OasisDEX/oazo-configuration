import { ConfigHelperType } from "⌨️";

export const getFeatures = ({
  isStaging: _isStaging,
  isDevelopment: _isDevelopment,
  isProduction,
}: ConfigHelperType) => ({
  Migrations: true,
  Send: true,
  FilterZeroTokenVaults: isProduction, // filter out zero token vaults on production
  VaultSwitching: true,
});
