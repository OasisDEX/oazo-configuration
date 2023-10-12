import {TokenSymbols} from "../../common";
import {tokens} from "../../common";

interface Token {
    symbol: TokenSymbols
    precision: number
}

export const getTokens = (): Record<TokenSymbols, Token> => {
    const result: Record<TokenSymbols, Token> = {} as any;

    for (const symbol of Object.keys(tokens) as TokenSymbols[]) {
        if (Object.prototype.hasOwnProperty.call(tokens, symbol) && tokens[symbol].toObject) {
            result[symbol] = { ...tokens[symbol].toObject() };
        }
    }

    return result;
};


// const configObject = {
//     tokens: {
//         'USDC': {
//             symbol: 'USDC',
//             precision: 6
//         },
//         'DAI': {
//             symbol: 'DAI',
//             precision: 18
//         },
//         'WETH': {
//             symbol: 'WETH',
//             precision: 18
//         }
//     },
//     tokensByNetwork: {
//         mainnet: ['USDC', 'DAI'],
//         optimism: ['USDC'],
//         arbitrum: ['WETH']
//     }
// }