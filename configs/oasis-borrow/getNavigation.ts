import {TokenSymbol} from "🤝";

export const getNavigation= () => ({
    protocols: {
        ajna: {
            borrow: {
                description: 'Borrow against ETH, WBTC, DAI and any other type of collateral with AJNA.',
            },
            multiply: {
                description: 'Increase exposure to ETH, WBTC and more with AJNA; access top risk management tools.',
            },
            earn: {
                description: 'Earn yield on ETH, WBTC, DAI and more with AJNA; and get exclusive token rewards.',
            },
            extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/ethereum/ajna/multiply/SDAI-USDC',
            },
        },
        aave: {
            borrow: {
                description: 'Borrow against ETH, WBTC, sDAI and other types of collateral.',
            },
            multiply: {
                description: 'Increase exposure to ETH, WBTC and more; access top risk management tools.',
            },
            earn: {
                description: 'Earn yield on ETH, sDAI and more; lend or yield loop strategies in one transaction.',
            },
            extra: {
                title: 'Amplify stETH up to 9.99x.',
                description:
                    'Use Summer.fi earn to increase your exposure to stETH yield seamlessly.',
                url: '/ethereum/aave/v3/earn/wstetheth',
            },
        },
        maker: {
            borrow: {
                description: 'Borrow DAI against ETH, LSTs and WBTC.',
            },
            multiply: {
                description: 'Increase exposure to ETH, LSTs and WBTC; access top risk management tools.',
            },
            earn: {
                description: 'Earn with the Dai Savings Rate and mint sDAI.',
            },
            extra: {
                title: 'Access the DSR',
                description:
                    'Earn risk reduced yield on DAI with the Maker Protocols Dai Savings Rate.',
                url: '/earn/dsr',
            },
        },
        morphoBlue: {
            borrow: {
                description: 'Borrow against multiple collaterals in a new decentralized protocol',
            },
            multiply: {
                description: 'Multiply exposure to WSTETH and other assets with high LTV',
            },
            earn: {
                description: 'Deposit to the most trusted MetaMorpho Vaults to earn a yield',
            },
            extra: {
                title: 'WSTETH/ETH yield Multiple',
                description:
                    'Gain the best yield multiplying your WSTETH',
                url: '/',
            },
        },
        spark: {
            borrow: {
                description: 'Borrow DAI at the best rate, with the highest LTVs. Become eligible for token rewards.',
            },
            multiply: {
                description: 'Increase exposure to ETH and LSTs; access top risk management tools.',
            },
            earn: {
                description: 'Earn yield on ETH and DAI. Become eligible for token rewards.',
            },
            extra: {
                title: 'Amplify stETH up to 9.99x.',
                description:
                    'Use Summer.fi earn to increase your exposure to stETH yield seamlessly.',
                url: '/ethereum/spark/v3/earn/wstetheth',
            },
        },
    },
    tokens: {
        popular: [TokenSymbol.ETH, TokenSymbol.STETH, TokenSymbol.RETH, TokenSymbol.CBETH, TokenSymbol.DAI, TokenSymbol.WBTC, TokenSymbol.USDC],
        new: [TokenSymbol.SDAI],
    },
})
