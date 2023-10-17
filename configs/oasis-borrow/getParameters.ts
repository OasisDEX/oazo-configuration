import { ConfigHelperType } from "⌨️";
import {TokenSymbol} from "🤝";

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
      collateral: [TokenSymbol.DAI, TokenSymbol.USDC],
      strategyTypes: ["short"],
    },
    adjustDisabledFor: {
      collateral: [],
      strategyTypes: [],
    },
  },
});
