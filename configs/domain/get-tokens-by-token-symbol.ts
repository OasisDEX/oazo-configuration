import {IToken, TokenSymbol, tokensByTokenSymbol} from "🤝";


export const getTokenByTokenSymbol = (): Record<TokenSymbol, Omit<IToken, 'address'>> => {
    const result: Record<TokenSymbol, Omit<IToken, 'address'>> = {} as unknown as Record<TokenSymbol, Omit<IToken, 'address'>>;

    for (const symbol of Object.keys(tokensByTokenSymbol) as TokenSymbol[]) {
        if (Object.prototype.hasOwnProperty.call(tokensByTokenSymbol, symbol) && tokensByTokenSymbol[symbol].toObject) {
            result[symbol] = { ...tokensByTokenSymbol[symbol].toObject() };
        }
    }

    return result;
};