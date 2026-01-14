import { ConfigHelperType } from "⌨️";
import { LendingProtocol, Network, TokenSymbol } from "🤝";

export const getParameters = ({
  notProduction,
}: Pick<ConfigHelperType, "notProduction">) => ({
  topBanner: notProduction
    ? {
        enabled: true,
        closeable: false,
        name: "transitioning",
        url: "http://blog.summer.fi/summer-fi-goes-all-in-on-the-lazy-summer-protocol-as-summer-pro-transitions-to-defi-saver/",
        message:
          "Summer.fi Pro is transitioning to DeFi Saver on February 12, 2026. After this date, all position management will occur through the DeFi Saver app.",
      }
    : {
        enabled: false,
        closeable: true,
        name: "rebranding",
        url: "https://blog.summer.fi/oasis-app-rebrands-to-summer-fi/",
        message: "Oasis.app is now Summer.fi! Read the announcement",
      },
  announcement: notProduction
    ? {
        enabled: true,
        message:
          "Summer.fi Pro is transitioning to DeFi Saver on February 12, 2026. After this date, all position management will occur through the DeFi Saver app.",
        url: "http://blog.summer.fi/summer-fi-goes-all-in-on-the-lazy-summer-protocol-as-summer-pro-transitions-to-defi-saver/",
        actionLabel: "Read more",
        btnBackground: "linear-gradient(90deg, #FF49A4 0%, #B049FF 93%)",
        btnColor: "white",
        icon: "lazy_summer_small_logo",
        iconBackground:
          "linear-gradient(90deg, rgba(255, 73, 164, 0.2) 0%, rgba(176, 73, 255, 0.2) 93%)",
        iconSize: 16,
      }
    : {
        enabled: true,
        message:
          "The Lazy Summer Protocol is now live! Get effortless access to DeFi's highest quality yields",
        url: "https://summer.fi/",
        actionLabel: "Try it now",
        btnBackground: "linear-gradient(90deg, #FF49A4 0%, #B049FF 93%)",
        btnColor: "white",
        icon: "lazy_summer_small_logo",
        iconBackground:
          "linear-gradient(90deg, rgba(255, 73, 164, 0.2) 0%, rgba(176, 73, 255, 0.2) 93%)",
        iconSize: 16,
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
