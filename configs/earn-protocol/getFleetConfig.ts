import { ConfigHelperType } from "⌨️";
import { NetworkIds, Risk } from "🤝";

type FleetConfig = {
  [contractAddress: `0x${string}`]: {
    address: `0x${string}` | "";
    name?: string;
    slug?: string;
    bestFor?: string;
    risk?: Risk;
    disabled?: boolean;
    bonus?: {
      multiplier: number;
      label: string;
      icon: string;
      description: string;
    };
  };
};

type GetFleetConfig = (params: ConfigHelperType) => {
  [networkId in NetworkIds]: FleetConfig;
};

const emptyConfig: FleetConfig = {
  // just for the (later) type safety - so everything has the same
  // type and is defined dont actually use "0x" key please
  "0x": {
    address: "",
    name: "",
    slug: "",
    bestFor: "",
    risk: "lower",
    disabled: false,
    bonus: {
      multiplier: 0,
      label: "",
      icon: "",
      description: "",
    },
  },
};

const vaultConfig: (props: FleetConfig[`0x${string}`]) => FleetConfig = (
  props
) => ({
  [props.address.toLowerCase()]: {
    ...props,
    address: props.address.toLowerCase() as `0x${string}`,
  },
});

export const getFleetConfig: GetFleetConfig = ({
  isProduction: _isProduction,
}) => ({
  // FLEET ADDRESS SHOULD BE ALL LOWERCASE ('vaultConfig' takes care of it)
  [NetworkIds.MAINNET]: {
    ...emptyConfig,
    ...vaultConfig({
      address: "0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10", // ETH
      risk: "higher",
      bestFor: "More aggressive strategies",
    }),
    ...vaultConfig({
      address: "0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06", // USDC
      risk: "higher",
      bestFor: "More aggressive strategies",
    }),
  },
  [NetworkIds.OPTIMISMMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.ARBITRUMMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.BASEMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.SONIC]: {
    ...emptyConfig,
    ...vaultConfig({
      address: "0x507a2d9e87dbd3076e65992049c41270b47964f8", // USDC
      bonus: {
        multiplier: 12,
        label: "Sonic Points",
        icon: "earn_network_sonic",
        description: "This position is eligible for 12x Sonic points.",
      },
    }),
  },
  [NetworkIds.HYPERLIQUID]: {
    ...emptyConfig,
    ...vaultConfig({
      address: "0x2cc190fb654141dfbeac4c0f718f4d511674d346", // USDT0
      bonus: {
        multiplier: 0,
        description: "Hyperlend, Hyperbeat and Felix",
        icon: "stars",
        label: "Earn points across protocols",
      },
    }),
    ...vaultConfig({
      address: "0x252e5aa42c1804b85b2ce6712cd418a0561232ba", // USDC
      bonus: {
        multiplier: 0,
        description: "Hyperlend, Hyperbeat and Felix",
        icon: "stars",
        label: "Earn points across protocols",
      },
    }),
  },
});
