import {TokenSymbols} from "./token-symbols";

export interface IToken {
    symbol: TokenSymbols
    precision: number
    address?: string
}

export class Token implements IToken {
    symbol: TokenSymbols
    precision: number
    address: string

    constructor(symbol: TokenSymbols, precision: number, address?: string) {
        this.symbol = symbol
        this.precision = precision
        this.address = address
    }

    setAddress(address: string) {
        this.address = address

        return this
    }

    toObject(): { symbol: TokenSymbols; precision: number, address?: string } {
        return {
            symbol: this.symbol,
            precision: this.precision,
            address: this.address || undefined
        };
    }
}

const ETH = new Token(TokenSymbols.ETH, 18)
const WETH = new Token(TokenSymbols.WETH, 18)
const STETH = new Token(TokenSymbols.STETH, 18)
const WSTETH = new Token(TokenSymbols.WSTETH, 18)
const WBTC = new Token(TokenSymbols.WBTC, 8)
const USDC = new Token(TokenSymbols.USDC, 6)
const DAI = new Token(TokenSymbols.DAI, 18)
const CBETH = new Token(TokenSymbols.CBETH, 8)
const RETH = new Token(TokenSymbols.RETH, 8)
const AAVE = new Token(TokenSymbols.AAVE, 18)
const LINK = new Token(TokenSymbols.LINK, 18)
const UNI = new Token(TokenSymbols.UNI, 18)
const SUSHI = new Token(TokenSymbols.SUSHI, 18)
const CRV = new Token(TokenSymbols.CRV, 18)
const SNX = new Token(TokenSymbols.SNX, 18)
const ADAI = new Token(TokenSymbols.ADAI, 18)
const BAL = new Token(TokenSymbols.BAL, 18)
const BAT = new Token(TokenSymbols.BAT, 18)
const COMP = new Token(TokenSymbols.COMP, 18)
const CRVV1ETHSTETH = new Token(TokenSymbols.CRVV1ETHSTETH, 18)
const FRAX = new Token(TokenSymbols.FRAX, 18)
const GHO = new Token(TokenSymbols.GHO, 18)
const GNO = new Token(TokenSymbols.GNO, 18)
const GUNIV3DAIUSDC1 = new Token(TokenSymbols.GUNIV3DAIUSDC1, 18)
const GUNIV3DAIUSDC2 = new Token(TokenSymbols.GUNIV3DAIUSDC2, 18)
const GUSD = new Token(TokenSymbols.GUSD, 2)
const KNC = new Token(TokenSymbols.KNC, 18)
const LDO = new Token(TokenSymbols.LDO, 18)
const LRC = new Token(TokenSymbols.LRC, 18)
const LUSD = new Token(TokenSymbols.LUSD, 18)
const MANA = new Token(TokenSymbols.MANA, 18)
const MATIC = new Token(TokenSymbols.MATIC, 18)
const PAX = new Token(TokenSymbols.PAX, 18)
const PAXUSD = new Token(TokenSymbols.PAXUSD, 18)
const RENBTC = new Token(TokenSymbols.RENBTC, 8)
const RWA001 = new Token(TokenSymbols.RWA001, 18)
const RWA002 = new Token(TokenSymbols.RWA002, 18)
const RWA003 = new Token(TokenSymbols.RWA003, 18)
const RWA004 = new Token(TokenSymbols.RWA004, 18)
const RWA005 = new Token(TokenSymbols.RWA005, 18)
const RWA006 = new Token(TokenSymbols.RWA006, 18)
const SDAI = new Token(TokenSymbols.SDAI, 18)
const TBTC = new Token(TokenSymbols.TBTC, 18)
const TUSD = new Token(TokenSymbols.TUSD, 18)
const UNIV2AAVEETH = new Token(TokenSymbols.UNIV2AAVEETH, 18)
const UNIV2DAIETH = new Token(TokenSymbols.UNIV2DAIETH, 18)
const UNIV2DAIUSDC = new Token(TokenSymbols.UNIV2DAIUSDC, 18)
const UNIV2DAIUSDT = new Token(TokenSymbols.UNIV2DAIUSDT, 18)
const UNIV2ETHUSDT = new Token(TokenSymbols.UNIV2ETHUSDT, 18)
const UNIV2LINKETH = new Token(TokenSymbols.UNIV2LINKETH, 18)
const UNIV2UNIETH = new Token(TokenSymbols.UNIV2UNIETH, 18)
const UNIV2USDCETH = new Token(TokenSymbols.UNIV2USDCETH, 18)
const UNIV2WBTCDAI = new Token(TokenSymbols.UNIV2WBTCDAI, 18)
const UNIV2WBTCETH = new Token(TokenSymbols.UNIV2WBTCETH, 18)
const USDT = new Token(TokenSymbols.USDT, 6)
const WLD = new Token(TokenSymbols.WLD, 8)
const YIELDBTC = new Token(TokenSymbols.YIELDBTC, 8)
const YIELDETH = new Token(TokenSymbols.YIELDETH, 18)
const YFI = new Token(TokenSymbols.YFI, 18)
const ZRX = new Token(TokenSymbols.ZRX, 18)

export type Tokens = {
    [key in TokenSymbols]: Token;
};

export const tokens: Tokens = {
    ETH,
    WETH,
    STETH,
    WSTETH,
    WBTC,
    USDC,
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