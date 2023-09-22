import { ConfigHelperType } from "⌨️";

export default function ({
  isDevelopment: _isDevelopment,
  notProduction,
  isStaging,
}: ConfigHelperType) {
  return {
    features: {
      AaveV3ArbitrumBorrow: true,
      AaveV3ArbitrumEarn: false,
      AaveV3EarncbETHeth: false,
      AaveV3EarnrETHeth: false,
      AaveV3History: false,
      AaveV3OptimismBorrow: true,
      AaveV3OptimismEarn: false,
      AaveV3Protection: true,
      AaveV3ProtectionWrite: true,
      AjnaPoolFinder: true,
      AjnaReusableDPM: false,
      AjnaSafetySwitch: true,
      AjnaSuppressValidation: false,
      AnotherTestFeature: true, // used in unit tests
      ConstantMultipleReadOnly: false,
      DaiSavingsRate: true,
      DisableSidebarScroll: false,
      FollowAAVEVaults: false,
      NewNavigation: false,
      ProxyCreationDisabled: false,
      ProxyReveal: false,
      ReadOnlyAutoTakeProfit: false,
      ReadOnlyBasicBS: false,
      Referrals: true,
      Sillyness: false,
      StopLossOpenFlow: false,
      StopLossRead: true,
      StopLossWrite: true,
      TestFeature: false, // used in unit tests
      UseNetworkSwitcherForks: false,
      UseNetworkSwitcherTestnets: false,
      SparkProtocolStopLoss: isStaging,
    },
    parameters: {
      topBanner: {
        name: 'rebranding',
        url: 'https://blog.summer.fi/oasis-app-rebrands-to-summer-fi/',
        message: 'Oasis.app is now Summer.fi! Read the announcement',
      },
      aaveLike: {
        orderInformation: {
          showFlashloanInformation: notProduction,
        },
      },
      navigation: {
        protocols: {
          ajna: {
            borrow: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/',
              },
            },
            multiply: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/',
              },
            },
            earn: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/',
              },
            },
          },
          aave: {
            borrow: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/',
              },
            },
            multiply: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
            earn: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '/',
              },
            },
          },
          maker: {
            borrow: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
            multiply: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
            earn: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
          },
          spark: {
            borrow: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
            multiply: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
            earn: {
              tokens: ['ETH', 'WBTC', 'DAI'],
              extra: {
                title: 'Amplify sDAI up to 35x.',
                description:
                    'Use Summer.fi multiply to increase your exposure to sDAI yield seamlessly.',
                url: '',
              },
            },
          },
        },
        tokens: {
          popular: ['ETH, STETH', 'RETH', 'CBETH', 'DAI'],
          new: ['SDAI', 'GHO', 'TBTC'],
        },
      },
    },
  }
}
