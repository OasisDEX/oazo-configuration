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
  },
};

const disableVault = (address: string, flag: boolean) =>
  flag
    ? {
        ...{
          [address]: {
            address,
            disabled: true,
          },
        },
      }
    : {};

export const getFleetConfig: GetFleetConfig = ({ isProduction }) => ({
  // FLEET ADDRESS SHOULD BE ALL LOWERCASE (unlike this comment)
  [NetworkIds.MAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.OPTIMISMMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.ARBITRUMMAINNET]: {
    ...emptyConfig,
  },
  [NetworkIds.BASEMAINNET]: {
    ...emptyConfig,
    ...disableVault("0x64db8f51f1bf7064bb5a361a7265f602d348e0f0", isProduction),
  },
  [NetworkIds.SONIC]: {
    ...emptyConfig,
    ...disableVault("0x8b8235f12f03c34d9cb064460e234cc2c9a12922", isProduction),
    ...disableVault("0x507a2d9e87dbd3076e65992049c41270b47964f8", isProduction),
  },
});
