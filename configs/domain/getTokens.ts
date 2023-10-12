import {IToken, TokenSymbols, tokens} from "🤝";


export const getTokens = (): Record<TokenSymbols, IToken> => {
    const result: Record<TokenSymbols, IToken> = {} as unknown as Record<TokenSymbols, IToken>;

    for (const symbol of Object.keys(tokens) as TokenSymbols[]) {
        if (Object.prototype.hasOwnProperty.call(tokens, symbol) && tokens[symbol].toObject) {
            result[symbol] = { ...tokens[symbol].toObject() };
        }
    }

    return result;
};