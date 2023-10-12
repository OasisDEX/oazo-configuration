import {IToken, Networks, TokenSymbols, tokens} from "🤝";

type TokenSubset = {
    [key in TokenSymbols]?: IToken;
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
        [Networks.MAINNET]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}, {[TokenSymbols.DAI]: tokens.DAI.setAddress('').toObject()}],
        [Networks.OPTIMISM]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.ARBITRUM]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.BASE]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.POLYGON]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.OPTIMISM_GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.ARBITRUM_GOERLI]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
        [Networks.POLYGON_MUMBAI]: [{[TokenSymbols.USDC]: tokens.USDC.setAddress('').toObject()}],
    }
};