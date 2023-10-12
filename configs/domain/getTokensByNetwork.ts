import {Networks, Token, TokenSymbols, tokens} from "🤝";

type TokenSubset = {
    [key in TokenSymbols]?: Token;
};

type NetworkTokens = {
    [network in Networks]: TokenSubset[];
};

/**
 * Returns tokens for each network
 * Could be enhanced to return tokens with address
 */
export const getTokensByNetwork = (): NetworkTokens => {
    return {
        [Networks.MAINNET]: [{[TokenSymbols.USDC]: tokens.USDC}, {[TokenSymbols.DAI]: tokens.DAI}],
        [Networks.OPTIMISM]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.ARBITRUM]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.BASE]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.POLYGON]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.OPTIMISM_GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.ARBITRUM_GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC}],
        [Networks.POLYGON_MUMBAI]: [{[TokenSymbols.USDC]: tokens.USDC}],
    }
};