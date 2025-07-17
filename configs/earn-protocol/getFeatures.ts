import { ConfigHelperType } from "⌨️";

export const getFeatures = ({
  isStaging,
  isDevelopment,
  isProduction,
}: ConfigHelperType) => ({
  Migrations: true,
  Send: true,
  FilterZeroTokenVaults: isProduction, // filter out zero token vaults on production
  VaultSwitching: true,
  BeachClub: true,
  Institutions: isStaging || isDevelopment,
  Team: isStaging || isDevelopment,
  AdrollPixelScript: !isProduction,
  Game: true,
});
