import {MainNetworks, TestNetworks, TokenSymbols} from "../../common";

type NetworkTokens = {
    main: {
        [network in MainNetworks]: TokenSymbols[];
    };
    test: {
        [network in TestNetworks]: TokenSymbols[];
    };
};

export const getTokensByNetwork = (): NetworkTokens => {
    return {
        main: {
            [MainNetworks.MAINNET]: [TokenSymbols.USDC],
            [MainNetworks.OPTIMISM]: [TokenSymbols.USDC],
            [MainNetworks.ARBITRUM]: [TokenSymbols.USDC],
            [MainNetworks.BASE]: [TokenSymbols.USDC],
        },
        test: {
            [TestNetworks.GOERLI]: [TokenSymbols.USDC],
        }
    }
};