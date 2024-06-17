import {TokenSymbol} from "🤝";

export const getProducts = () => ({
    borrow: {
        ethereum: [
            {
                label: 'WSTETH/USDC', tokens: [TokenSymbol.WSTETH, TokenSymbol.USDC], link: '/ethereum/morphoblue/borrow/WSTETH-USDC'
            },
            {
                label: 'ETH/DAI', tokens: [TokenSymbol.ETH, TokenSymbol.DAI], link: '/ethereum/aave/v3/borrow/ETH-DAI'
            },
            {
                label: 'WBTC/DAI', tokens: [TokenSymbol.WBTC, TokenSymbol.DAI], link: '/ethereum/spark/borrow/WBTC-DAI'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/base/aave/v3/borrow/ETH-USDC'
            },
            {
                label: 'CBETH/USDC', tokens: [TokenSymbol.CBETH, TokenSymbol.USDC], link: '/base/aave/v3/borrow/CBETH-USDC'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/arbitrum/aave/v3/borrow/ETH-USDC'
            },
            {
                label: 'WSTETH/USDC', tokens: [TokenSymbol.WSTETH, TokenSymbol.USDC], link: '/arbitrum/aave/v3/borrow/WSTETH-USDC'
            },
            {
                label: 'WBTC/USDC', tokens: [TokenSymbol.WBTC, TokenSymbol.USDC], link: '/arbitrum/aave/v3/borrow/WBTC-USDC'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/optimism/aave/v3/borrow/ETH-USDC'
            },
            {
                label: 'WSTETH/USDC', tokens: [TokenSymbol.WSTETH, TokenSymbol.USDC], link: '/optimism/aave/v3/borrow/WSTETH-USDC'
            },
            {
                label: 'WBTC/USDC', tokens: [TokenSymbol.WBTC, TokenSymbol.USDC], link: '/optimism/aave/v3/borrow/WBTC-USDC'
            },
        ],
    },
    multiply: {
        ethereum: [
            {
                label: 'WSTETH/USDC', tokens: [TokenSymbol.WSTETH, TokenSymbol.USDC], link: '/ethereum/morphoblue/multiply/WSTETH-USDC'
            },
            {
                label: 'ETH/DAI', tokens: [TokenSymbol.ETH, TokenSymbol.DAI], link: '/ethereum/spark/multiply/ETH-DAI'
            },
            {
                label: 'WBTC/USDT', tokens: [TokenSymbol.WBTC, TokenSymbol.USDT], link: '/ethereum/morphoblue/multiply/WBTC-USDT'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/base/aave/v3/multiply/ETH-USDC'
            },
            {
                label: 'CBETH/USDC', tokens: [TokenSymbol.CBETH, TokenSymbol.USDC], link: '/base/aave/v3/multiply/CBETH-USDC'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/arbitrum/aave/v3/multiply/ETH-USDC'
            },
            {
                label: 'WBTC/USDC', tokens: [TokenSymbol.WBTC, TokenSymbol.USDC], link: '/arbitrum/aave/v3/multiply/WBTC-USDC'
            },
            {
                label: 'WSTETH/USDC', tokens: [TokenSymbol.WSTETH, TokenSymbol.USDC], link: '/arbitrum/aave/v3/multiply/WSTETH-USDC'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', tokens: [TokenSymbol.ETH, TokenSymbol.USDC], link: '/optimism/aave/v3/multiply/ETH-USDC'
            },
            {
                label: 'WBTC/USDC', tokens: [TokenSymbol.WBTC, TokenSymbol.USDC], link: '/optimism/aave/v3/multiply/WBTC-USDC'
            },
            {
                label: 'WBTC/DAI', tokens: [TokenSymbol.WBTC, TokenSymbol.DAI], link: '/optimism/aave/v3/multiply/WBTC-DAI'
            },
        ],
    },
    earn: {
        ethereum: [
            {
                label: 'USDC Steakhouse', tokens: [TokenSymbol.USDC], link: '/ethereum/erc-4626/earn/steakhouse-USDC'
            },
            {
                label: 'WSTETH/ETH Yield Loop', tokens: [TokenSymbol.WSTETH, TokenSymbol.ETH], link: '/ethereum/spark/multiply/WSTETH-ETH'
            },
            {
                label: 'ETH Flagship', tokens: [TokenSymbol.ETH], link: '/ethereum/erc-4626/earn/flagship-ETH'
            },
        ],
        base: [
            {
                label: 'CBETH/ETH Yield Loop', tokens: [TokenSymbol.CBETH, TokenSymbol.ETH], link: '/base/aave/v3/multiply/CBETH-ETH'
            },
            {
                label: 'WSTETH/ETH LP', tokens: [TokenSymbol.WSTETH, TokenSymbol.ETH], link: '/base/ajna/earn/WSTETH-ETH#setup'
            },
        ],
        arbitrum: [
            {
                label: 'WSTETH/ETH Yield Loop', tokens: [TokenSymbol.WSTETH, TokenSymbol.ETH], link: '/arbitrum/aave/v3/multiply/WSTETH-ETH'
            },
            {
                label: 'RETH/ETH Yield Loop', tokens: [TokenSymbol.RETH, TokenSymbol.ETH], link: '/arbitrum/aave/v3/multiply/RETH-ETH'
            },
        ],
        optimism: [
            {
                label: 'WSTETH/ETH Yield Loop', tokens: [TokenSymbol.WSTETH, TokenSymbol.ETH], link: '/optimism/aave/v3/multiply/WSTETH-ETH'
            },
        ],
    },
})
