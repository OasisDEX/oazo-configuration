import { ConfigHelperType } from "⌨️";
import { LendingProtocol, Network, TokenSymbol } from "🤝";

export const getParameters = ({
  notProduction,
}: Pick<ConfigHelperType, "notProduction">) => ({
  topBanner: {
    enabled: false,
    closeable: true,
    name: "rebranding",
    url: "https://blog.summer.fi/oasis-app-rebrands-to-summer-fi/",
    message: "Oasis.app is now Summer.fi! Read the announcement",
  },
  announcement: {
    enabled: true,
    message:
      "The Lazy Summer Protocol is now live! Get effortless access to DeFi's highest quality yields. Try it now",
    url: "https://summer.fi/",
    actionLabel: "Try it now",
    icon: "summer_light",
  },
  locationBanner: {
    GB: {
      enabled: true,
      closeable: false,
      name: "uk_disclaimer",
      url: "https://docs.summer.fi/legal/uk-disclaimer",
      message:
        "UK disclaimer: This web application is provided as a tool for users to interact with third party DeFi protocols on their own initiative, with no endorsement or recommendation of ... Read more",
    },
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
    flashLoanTokens: {
      OPTIMISMMAINNET: "WETH",
      BASEMAINNET: "WETH",
    },
    isolatedCollateralTokens: ["LDO", "FRAX", "MKR", "SUSDE"],
    riskRatios: {
      // uses new RiskRatio(new BigNumber(5), RiskRatio.TYPE.COL_RATIO) so its one over the number here
      minimum: 100,
      default: 5,
    },
  },
  connectionMethods: {
    injected: true,
    walletConnect: true,
    walletLink: true,
    gnosis: true,
    ledger: false,
    trezor: true,
  },
  automation: {
    minNetValueUSD: {
      [Network.MAINNET]: {
        [LendingProtocol.AaveV3]: 10_000,
        [LendingProtocol.SparkV3]: 10_000,
      },
      [Network.ARBITRUM]: {
        [LendingProtocol.AaveV3]: 100,
      },
      [Network.OPTIMISM]: {
        [LendingProtocol.AaveV3]: 100,
      },
      [Network.BASE]: {
        [LendingProtocol.AaveV3]: 100,
      },
    },
    defaultMinValue: 10_000,
  },
  walletRpc: {
    8453: "https://mainnet.base.org/", // Base
    10: "https://mainnet.optimism.io/", // Optimism
    42161: "https://arb1.arbitrum.io/rpc", // Arbitrum
  },
  subgraphs: {
    baseUrl: notProduction
      ? "https://satsuma.subgraph.staging.oasisapp.dev/subgraphs/name"
      : "https://satsuma.subgraph.staging.oasisapp.dev/subgraphs/name",
    baseShortUrl: notProduction
      ? "https://subgraph.staging.oasisapp.dev"
      : "https://satsuma.subgraph.staging.oasisapp.dev",
  },
});
