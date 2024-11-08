import { IToken, TokenSymbol, tokenByTokenSymbol } from '🤝';

export const getTokenByTokenSymbol = (): Record<
  TokenSymbol,
  Omit<IToken, 'address'>
> => {
  const result: Record<
    TokenSymbol,
    Omit<IToken, 'address'>
  > = {} as unknown as Record<TokenSymbol, Omit<IToken, 'address'>>;

  for (const symbol of Object.keys(tokenByTokenSymbol) as TokenSymbol[]) {
    if (
      Object.prototype.hasOwnProperty.call(tokenByTokenSymbol, symbol) &&
      tokenByTokenSymbol[symbol].toObject
    ) {
      result[symbol] = { ...tokenByTokenSymbol[symbol].toObject() };
    }
  }

  return result;
};
