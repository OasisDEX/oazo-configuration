import {ADDRESSES, ADDRESS_ZERO, Common, SystemKeys} from '@oasisdex/addresses'
import {IToken, Networks, TokenSymbols, Tokens, tokens} from "🤝";

type TokenSubset = {
    [key in TokenSymbols]?: IToken;
};

type NetworkTokens = {
    [network in Networks]: TokenSubset[];
};

/**
 * Returns tokens for each network
 * Can be enhanced to return address enriched tokens for each network
 */
export const getTokensByNetwork = (): NetworkTokens => {
    const mainnetCommon = ADDRESSES[Networks.MAINNET][SystemKeys.COMMON]
    const optimismCommon = ADDRESSES[Networks.OPTIMISM][SystemKeys.COMMON]
    const arbitrumCommon = ADDRESSES[Networks.ARBITRUM][SystemKeys.COMMON]
    // const baseCommon = ADDRESSES[Networks.BASE][SystemKeys.COMMON]
    // const polygonCommon = ADDRESSES[Networks.POLYGON][SystemKeys.COMMON]
    const goerliCommon = ADDRESSES[Networks.GOERLI][SystemKeys.COMMON]
    // const optimismGoerliCommon = ADDRESSES[Networks.OPTIMISM_GOERLI][SystemKeys.COMMON]

    return {
        [Networks.MAINNET]: [
            ...generateEntries(tokens, mainnetCommon)
        ],
        [Networks.OPTIMISM]: [
            ...generateEntries(tokens, optimismCommon),
        ],
        [Networks.ARBITRUM]: [
            ...generateEntries(tokens, arbitrumCommon),
        ],
        [Networks.BASE]: [],
        [Networks.POLYGON]: [],
        [Networks.GOERLI]: [
            ...generateEntries(tokens, goerliCommon),
        ],
        [Networks.OPTIMISM_GOERLI]: [],
        [Networks.ARBITRUM_GOERLI]: [],
        [Networks.POLYGON_MUMBAI]: [],
    }
};

function generateEntries(tokens: Tokens, networkCommonAddresses: Record<Common, string>) {
    const entries = [];

    for (const tokenSymbol in tokens) {
        // We're forcing the type here because we know that the tokenSymbol is (or should be) a key of Tokens
        const address = networkCommonAddresses[tokenSymbol as keyof typeof networkCommonAddresses];

        // Check if the address is neither ZERO_ADDRESS nor an empty string.
        // Also in case there's no overlap between tokenSymbols and networkCommonAddresses ignore the tokenSymbol
        if (address && address !== "" && address !== ADDRESS_ZERO) {
            const tokenObject = {
                [tokenSymbol]: tokens[tokenSymbol as TokenSymbols].setAddress(address).toObject()
            };
            entries.push(tokenObject);
        }
    }

    return entries
}