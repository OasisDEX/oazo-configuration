import {TokenSymbol} from "🤝";

export const getProducts = () => ({
    borrow: {
        ethereum: [
            {
                label: 'WSTETH/USDC', link: '/ethereum/morphoblue/borrow/WSTETH-USDC', protocol: 'morphoblue'
            },
            {
                label: 'ETH/DAI', link: '/ethereum/aave/v3/borrow/ETH-DAI', protocol: 'aavev3'
            },
            {
                label: 'WBTC/DAI', link: '/ethereum/spark/borrow/WBTC-DAI', protocol: 'sparv3'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', link: '/base/aave/v3/borrow/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'CBETH/USDC', link: '/base/aave/v3/borrow/CBETH-USDC', protocol: 'aavev3'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', link: '/arbitrum/aave/v3/borrow/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', link: '/arbitrum/aave/v3/borrow/WSTETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC',
                tokens: [TokenSymbol.WBTC, TokenSymbol.USDC],
                link: '/arbitrum/aave/v3/borrow/WBTC-USDC',
                protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', link: '/optimism/aave/v3/borrow/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', link: '/optimism/aave/v3/borrow/WSTETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', link: '/optimism/aave/v3/borrow/WBTC-USDC', protocol: 'aavev3'
            },
        ],
    },
    multiply: {
        ethereum: [
            {
                label: 'WSTETH/USDC', link: '/ethereum/morphoblue/multiply/WSTETH-USDC', protocol: 'morphoblue'
            },
            {
                label: 'ETH/DAI', link: '/ethereum/spark/multiply/ETH-DAI', protocol: 'sparkv3'
            },
            {
                label: 'WBTC/USDT', link: '/ethereum/morphoblue/multiply/WBTC-USDT', protocol: 'morphoblue'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', link: '/base/aave/v3/multiply/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'CBETH/USDC', link: '/base/aave/v3/multiply/CBETH-USDC', protocol: 'aavev3'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', link: '/arbitrum/aave/v3/multiply/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', link: '/arbitrum/aave/v3/multiply/WBTC-USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', link: '/arbitrum/aave/v3/multiply/WSTETH-USDC', protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', link: '/optimism/aave/v3/multiply/ETH-USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', link: '/optimism/aave/v3/multiply/WBTC-USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/DAI', link: '/optimism/aave/v3/multiply/WBTC-DAI', protocol: 'aavev3'
            },
        ],
    },
    earn: {
        ethereum: [
            {
                label: 'Steakhouse USDC', link: '/ethereum/erc-4626/earn/steakhouse-USDC', protocol: 'morphoblue'
            },
            {
                label: 'WSTETH/ETH', link: '/ethereum/spark/multiply/WSTETH-ETH', protocol: 'sparkv3'
            },
            {
                label: 'Flagship ETH', link: '/ethereum/erc-4626/earn/flagship-ETH', protocol: 'morphoblue'
            },
        ],
        base: [
            {
                label: 'CBETH/ETH', link: '/base/aave/v3/multiply/CBETH-ETH', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/ETH', link: '/base/ajna/earn/WSTETH-ETH#setup', protocol: 'ajna'
            },
        ],
        arbitrum: [
            {
                label: 'WSTETH/ETH', link: '/arbitrum/aave/v3/multiply/WSTETH-ETH', protocol: 'aavev3'
            },
            {
                label: 'RETH/ETH', link: '/arbitrum/aave/v3/multiply/RETH-ETH', protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'WSTETH/ETH', link: '/optimism/aave/v3/multiply/WSTETH-ETH', protocol: 'aavev3'
            },
        ],
    },
})
