import { ConfigHelperType } from "⌨️";

export const getLinks = ({ isProduction }: ConfigHelperType) => ({
  summerFiPro: {
    multiply: `https://${!isProduction ? "staging." : ""}summer.fi/multiply`,
    earn: `https://${!isProduction ? "staging." : ""}summer.fi/earn`,
    borrow: `https://${!isProduction ? "staging." : ""}summer.fi/borrow`,
  },
});
