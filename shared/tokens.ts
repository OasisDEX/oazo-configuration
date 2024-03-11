/**
 * Represents individual tokens with their specific attributes.
 * The `Token` class encapsulates details like token symbol, precision (for decimal representation),
 * and an optional Ethereum address (if assigned). Additionally, the `tokenByTokenSymbol` dictionary
 * allows for easy retrieval of tokens based on their symbol.
 */

import {TokenSymbol} from "./token-symbol";

export interface IToken {
    symbol: TokenSymbol
    precision: number
    address?: string
}

export class Token implements IToken {
    symbol: TokenSymbol
    precision: number
    address: string

    constructor(symbol: TokenSymbol, precision: number, address?: string) {
        this.symbol = symbol
        this.precision = precision
        this.address = address
    }

    setAddress(address: string) {
        this.address = address

        return this
    }

    toObject(): { symbol: TokenSymbol; precision: number, address?: string } {
        return {
            symbol: this.symbol,
            precision: this.precision,
            address: this.address || undefined
        };
    }
}

const ETH = new Token(TokenSymbol.ETH, 18)
const WETH = new Token(TokenSymbol.WETH, 18)
const STETH = new Token(TokenSymbol.STETH, 18)
const WSTETH = new Token(TokenSymbol.WSTETH, 18)
const WBTC = new Token(TokenSymbol.WBTC, 8)
const USDC = new Token(TokenSymbol.USDC, 6)
const USDBC = new Token(TokenSymbol.USDBC, 6)
const USDCE = new Token(TokenSymbol.USDCE, 6)
const DAI = new Token(TokenSymbol.DAI, 18)
const CBETH = new Token(TokenSymbol.CBETH, 8)
const RETH = new Token(TokenSymbol.RETH, 8)
const AAVE = new Token(TokenSymbol.AAVE, 18)
const LINK = new Token(TokenSymbol.LINK, 18)
const UNI = new Token(TokenSymbol.UNI, 18)
const SUSHI = new Token(TokenSymbol.SUSHI, 18)
const CRV = new Token(TokenSymbol.CRV, 18)
const SNX = new Token(TokenSymbol.SNX, 18)
const ADAI = new Token(TokenSymbol.ADAI, 18)
const BAL = new Token(TokenSymbol.BAL, 18)
const BAT = new Token(TokenSymbol.BAT, 18)
const COMP = new Token(TokenSymbol.COMP, 18)
const CRVV1ETHSTETH = new Token(TokenSymbol.CRVV1ETHSTETH, 18)
const FRAX = new Token(TokenSymbol.FRAX, 18)
const GHO = new Token(TokenSymbol.GHO, 18)
const GNO = new Token(TokenSymbol.GNO, 18)
const GUNIV3DAIUSDC1 = new Token(TokenSymbol.GUNIV3DAIUSDC1, 18)
const GUNIV3DAIUSDC2 = new Token(TokenSymbol.GUNIV3DAIUSDC2, 18)
const GUSD = new Token(TokenSymbol.GUSD, 2)
const KNC = new Token(TokenSymbol.KNC, 18)
const LDO = new Token(TokenSymbol.LDO, 18)
const LRC = new Token(TokenSymbol.LRC, 18)
const LUSD = new Token(TokenSymbol.LUSD, 18)
const MANA = new Token(TokenSymbol.MANA, 18)
const MATIC = new Token(TokenSymbol.MATIC, 18)
const PAX = new Token(TokenSymbol.PAX, 18)
const PAXUSD = new Token(TokenSymbol.PAXUSD, 18)
const RENBTC = new Token(TokenSymbol.RENBTC, 8)
const RWA001 = new Token(TokenSymbol.RWA001, 18)
const RWA002 = new Token(TokenSymbol.RWA002, 18)
const RWA003 = new Token(TokenSymbol.RWA003, 18)
const RWA004 = new Token(TokenSymbol.RWA004, 18)
const RWA005 = new Token(TokenSymbol.RWA005, 18)
const RWA006 = new Token(TokenSymbol.RWA006, 18)
const SDAI = new Token(TokenSymbol.SDAI, 18)
const TBTC = new Token(TokenSymbol.TBTC, 18)
const TUSD = new Token(TokenSymbol.TUSD, 18)
const UNIV2AAVEETH = new Token(TokenSymbol.UNIV2AAVEETH, 18)
const UNIV2DAIETH = new Token(TokenSymbol.UNIV2DAIETH, 18)
const UNIV2DAIUSDC = new Token(TokenSymbol.UNIV2DAIUSDC, 18)
const UNIV2DAIUSDT = new Token(TokenSymbol.UNIV2DAIUSDT, 18)
const UNIV2ETHUSDT = new Token(TokenSymbol.UNIV2ETHUSDT, 18)
const UNIV2LINKETH = new Token(TokenSymbol.UNIV2LINKETH, 18)
const UNIV2UNIETH = new Token(TokenSymbol.UNIV2UNIETH, 18)
const UNIV2USDCETH = new Token(TokenSymbol.UNIV2USDCETH, 18)
const UNIV2WBTCDAI = new Token(TokenSymbol.UNIV2WBTCDAI, 18)
const UNIV2WBTCETH = new Token(TokenSymbol.UNIV2WBTCETH, 18)
const USDT = new Token(TokenSymbol.USDT, 6)
const WLD = new Token(TokenSymbol.WLD, 8)
const YIELDBTC = new Token(TokenSymbol.YIELDBTC, 8)
const YIELDETH = new Token(TokenSymbol.YIELDETH, 18)
const YFI = new Token(TokenSymbol.YFI, 18)
const ZRX = new Token(TokenSymbol.ZRX, 18)

export type TokenByTokenSymbol = {
    [key in TokenSymbol]: Token;
};

/**
 * A dictionary mapping each token symbol to its corresponding initialised Token instance.
 * This allows for easy lookup and provides a unified way to access token-specific details
 * throughout the application.
 */
export const tokenByTokenSymbol: TokenByTokenSymbol = {
    ETH,
    WETH,
    STETH,
    WSTETH,
    WBTC,
    USDC,
    USDBC,
    USDCE,
    DAI,
    CBETH,
    RETH,
    AAVE,
    LINK,
    UNI,
    SUSHI,
    CRV,
    SNX,
    ADAI,
    BAL,
    BAT,
    COMP,
    CRVV1ETHSTETH,
    FRAX,
    GHO,
    GNO,
    GUNIV3DAIUSDC1,
    GUNIV3DAIUSDC2,
    GUSD,
    KNC,
    LDO,
    LRC,
    LUSD,
    MANA,
    MATIC,
    PAX,
    PAXUSD,
    RENBTC,
    RWA001,
    RWA002,
    RWA003,
    RWA004,
    RWA005,
    RWA006,
    SDAI,
    TBTC,
    TUSD,
    UNIV2AAVEETH,
    UNIV2DAIETH,
    UNIV2DAIUSDC,
    UNIV2DAIUSDT,
    UNIV2ETHUSDT,
    UNIV2LINKETH,
    UNIV2UNIETH,
    UNIV2USDCETH,
    UNIV2WBTCDAI,
    UNIV2WBTCETH,
    USDT,
    WLD,
    YIELDBTC,
    YIELDETH,
    YFI,
    ZRX
}