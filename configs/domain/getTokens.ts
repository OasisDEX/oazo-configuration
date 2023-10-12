import { ConfigHelperType } from "⌨️";
import {Network} from "../../common";
import { TokenSymbols} from "../../common";

const commonTokens = {

}

interface Token {
    symbol: TokenSymbols
    precision: number
}

export const getTokens = ({
                                isStaging,
                            }: Pick<ConfigHelperType, "isStaging">): Record<Network, Token> => ({
    [Network.MAINNET]: {
        symbol: TokenSymbols.USDC,
        precision: 6,
    }

});
