import { ConfigHelperType } from "⌨️";

export const getParameters = ({
  notProduction,
}: Pick<ConfigHelperType, "notProduction">) => ({
  topBanner: {
    name: "rebranding",
    url: "https://blog.summer.fi/oasis-app-rebrands-to-summer-fi/",
    message: "Oasis.app is now Summer.fi! Read the announcement",
  },
  aaveLike: {
    orderInformation: {
      showFlashloanInformation: notProduction,
    },
    closeDisabledFor: {
      collateral: ["DAI", "USDC"],
      strategyTypes: ["short"],
    },
    adjustDisabledFor: {
      collateral: [],
      strategyTypes: [],
    },
  },
});
