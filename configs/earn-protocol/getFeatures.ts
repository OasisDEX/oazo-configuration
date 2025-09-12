import { ConfigHelperType } from "⌨️";

export const getFeatures = ({ isProduction }: ConfigHelperType) => ({
  Migrations: true,
  Send: true,
  FilterZeroTokenVaults: isProduction, // filter out zero token vaults on production
  VaultSwitching: true,
  BeachClub: true,
  Institutions: true,
  Team: true,
  AdrollPixelScript: !isProduction,
  SuperLazyVaults: !isProduction,
  Game: true,
});
