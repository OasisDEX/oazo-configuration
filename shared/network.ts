/**
 * Enum representing various blockchain networks supported by the platform.
 * This includes both mainnets and testnets, providing a standardised way
 * to reference these networks throughout the application.
 */
export enum Network {
  // Mainnets
  MAINNET = "mainnet", // Ethereum Mainnet
  OPTIMISM = "optimism", // Optimism Layer 2 Mainnet
  ARBITRUM = "arbitrum", // Arbitrum Layer 2 Mainnet
  BASE = "base", // Base Layer 2 Mainnet (Coinbase)
  SONIC = "sonic",
  HYPERLIQUID = "hyperliquid",
}

export enum NetworkIds {
  MAINNET = 1,
  ARBITRUMMAINNET = 42161,
  OPTIMISMMAINNET = 10,
  BASEMAINNET = 8453,
  SONIC = 146,
  HYPERLIQUID = 999,
}
