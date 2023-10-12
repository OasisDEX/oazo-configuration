import {IToken, TokenSymbols, tokens} from "🤝";


export const getTokens = (): Record<TokenSymbols, Omit<IToken, 'address'>> => {
    const result: Record<TokenSymbols, Omit<IToken, 'address'>> = {} as unknown as Record<TokenSymbols, Omit<IToken, 'address'>>;

    for (const symbol of Object.keys(tokens) as TokenSymbols[]) {
        if (Object.prototype.hasOwnProperty.call(tokens, symbol) && tokens[symbol].toObject) {
            result[symbol] = { ...tokens[symbol].toObject() };
        }
    }

    return result;
};