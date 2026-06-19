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
    // RWA specific
    vaultInstitutionId?: string;
    vaultCuratorId?: string;
    vaultCurator?: string;
    vaultCuratorDescription?: string;
    navPriceSkipFirstNDays?: number;
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
    vaultInstitutionId: "",
    vaultCuratorId: "",
    vaultCurator: "",
    vaultCuratorDescription: "",
    navPriceSkipFirstNDays: 0,
    bonus: {
      multiplier: 0,
      label: "",
      icon: "",
      description: "",
    },
  },
};

const vaultConfig: (props: FleetConfig[`0x${string}`]) => FleetConfig = (
  props,
) => ({
  [props.address.toLowerCase()]: {
    ...props,
    address: props.address.toLowerCase() as `0x${string}`,
  },
});

const regularFleetConfigs: {
  [networkId in NetworkIds]: FleetConfig;
} = {
  [NetworkIds.MAINNET]: {
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
  [NetworkIds.OPTIMISMMAINNET]: {},
  [NetworkIds.ARBITRUMMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.BASEMAINNET]: {},
  [NetworkIds.SONIC]: {
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
};

const rwaFleetConfigs: {
  [networkId in NetworkIds]: FleetConfig;
} = {
  [NetworkIds.MAINNET]: {
    ...vaultConfig({
      address: "0x35aE5392cc355686606658d18dff9b9109390E13", // USDC testing orthodox
      risk: "lower",
      name: "Avantgarde Orthodox USDC",
      vaultInstitutionId: "Orthodox",
      vaultCuratorId: "avantgarde",
      vaultCurator: "Avantgarde",
      vaultCuratorDescription:
        "This Vault is curated and managed by Avantgarde Asset Managment.",
      bestFor: "Institutions, HNWs and Funds",
    }),
  },
  [NetworkIds.OPTIMISMMAINNET]: {},
  [NetworkIds.ARBITRUMMAINNET]: {},
  [NetworkIds.BASEMAINNET]: {
    ...vaultConfig({
      address: "0xb5a07af4302fa0d2bbb389b4481055ed3f576b73", // USDC testing avantgarde
      risk: "lower",
      name: "Avantgarde USDC",
      vaultInstitutionId: "ExtDemoCorp_v2",
      vaultCuratorId: "avantgarde",
      vaultCurator: "Avantgarde",
      vaultCuratorDescription:
        "This Vault is curated and managed by Avantgarde Asset Managment.",
      bestFor: "Institutions, HNWs and Funds",
      navPriceSkipFirstNDays: 5, // need to skip first 5 days so the NAV price calculations (and 30d Nav price apy change) isnt skewed
    }),
    ...vaultConfig({
      address: "0xd40ac82b840af6fbb5b3be41ec820b5ff1199df1", // USDC testing avantgarde (hidden one, unused)
      disabled: true,
    }),
    ...vaultConfig({
      address: "0xea342341Dc8dD1bca787Fac812dF9080A273d724", // USDC testing standard engine
      risk: "lower",
      name: "StdEng USDC",
      vaultInstitutionId: "ExtDemoCorp_3",
      vaultCuratorId: "standard-engine",
      vaultCurator: "StdEng",
      vaultCuratorDescription:
        "This Vault is curated and managed by Standard Engine.",
      bestFor: "Institutions, HNWs and Funds",
    }),
    ...vaultConfig({
      address: "0x44e39d3eb84fa25c2031252fc229f2a74a3800d4", // USDC testing standard engine  (hidden one, unused)
      disabled: true,
    }),
  },
  [NetworkIds.SONIC]: {},
  [NetworkIds.HYPERLIQUID]: {},
};

export const getFleetConfig: GetFleetConfig = ({
  isProduction: _isProduction,
}) => ({
  // FLEET ADDRESS SHOULD BE ALL LOWERCASE ('vaultConfig' takes care of it)
  [NetworkIds.MAINNET]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.MAINNET],
    ...rwaFleetConfigs[NetworkIds.MAINNET],
  },
  [NetworkIds.OPTIMISMMAINNET]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.OPTIMISMMAINNET],
    ...rwaFleetConfigs[NetworkIds.OPTIMISMMAINNET],
  },
  [NetworkIds.ARBITRUMMAINNET]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.ARBITRUMMAINNET],
    ...rwaFleetConfigs[NetworkIds.ARBITRUMMAINNET],
  },
  [NetworkIds.BASEMAINNET]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.BASEMAINNET],
    ...rwaFleetConfigs[NetworkIds.BASEMAINNET],
  },
  [NetworkIds.SONIC]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.SONIC],
    ...rwaFleetConfigs[NetworkIds.SONIC],
  },
  [NetworkIds.HYPERLIQUID]: {
    ...emptyConfig,
    ...regularFleetConfigs[NetworkIds.HYPERLIQUID],
    ...rwaFleetConfigs[NetworkIds.HYPERLIQUID],
  },
});
