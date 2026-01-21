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
  StakingV2: true,
  UseSumrCoingeckoPrice: !isProduction,
  SumrCoingeckoTokenID: isProduction ? "summer-2" : "stp-network", // checking if everything works fine with other token on dev
});
