import {TokenSymbols, tokens} from "🤝";

interface Token {
    symbol: TokenSymbols
    precision: number
}

export const getTokens = (): Record<TokenSymbols, Token> => {
    const result: Record<TokenSymbols, Token> = {} as unknown as Record<TokenSymbols, Token>;

    for (const symbol of Object.keys(tokens) as TokenSymbols[]) {
        if (Object.prototype.hasOwnProperty.call(tokens, symbol) && tokens[symbol].toObject) {
            result[symbol] = { ...tokens[symbol].toObject() };
        }
    }

    return result;
};