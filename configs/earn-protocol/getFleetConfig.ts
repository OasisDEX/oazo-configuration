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
      address: "0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10",
      risk: "higher",
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
      address: "0x507a2d9e87dbd3076e65992049c41270b47964f8",
      bonus: {
        multiplier: 12,
        label: "Sonic Points",
        icon: "earn_network_sonic",
        description: "This position is eligible for 12x Sonic points.",
      },
    }),
  },
});
