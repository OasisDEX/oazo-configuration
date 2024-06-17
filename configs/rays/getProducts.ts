import {TokenSymbol} from "🤝";

export const getProducts = () => ({
    borrow: {
        ethereum: [
            {
                label: 'WSTETH/USDC', protocol: 'morphoblue'
            },
            {
                label: 'ETH/DAI', protocol: 'aavev3'
            },
            {
                label: 'WBTC/DAI', protocol: 'spark'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'CBETH/USDC', protocol: 'aavev3'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', protocol: 'aavev3'
            },
        ],
    },
    multiply: {
        ethereum: [
            {
                label: 'WSTETH/USDC', protocol: 'morphoblue'
            },
            {
                label: 'ETH/DAI', protocol: 'spark'
            },
            {
                label: 'WBTC/USDT', protocol: 'morphoblue'
            },
        ],
        base: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'CBETH/USDC', protocol: 'aavev3'
            },
        ],
        arbitrum: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/USDC', protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'ETH/USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/USDC', protocol: 'aavev3'
            },
            {
                label: 'WBTC/DAI', protocol: 'aavev3'
            },
        ],
    },
    earn: {
        ethereum: [
            {
                label: 'Steakhouse USDC', protocol: 'morphoblue'
            },
            {
                label: 'WSTETH/ETH', protocol: 'spark'
            },
            {
                label: 'Flagship ETH', protocol: 'morphoblue'
            },
        ],
        base: [
            {
                label: 'CBETH/ETH', protocol: 'aavev3'
            },
            {
                label: 'WSTETH/ETH', protocol: 'ajna'
            },
        ],
        arbitrum: [
            {
                label: 'WSTETH/ETH', protocol: 'aavev3'
            },
            {
                label: 'RETH/ETH', protocol: 'aavev3'
            },
        ],
        optimism: [
            {
                label: 'WSTETH/ETH', protocol: 'morphoblue'
            },
        ],
    },
})
