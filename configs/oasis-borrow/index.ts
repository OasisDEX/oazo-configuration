import { ConfigHelperType } from "⌨️";

export default function ({ isProduction, notProduction }: ConfigHelperType) {
  return {
    "🌞": false, // or https://summer.fi/harheeharheeharhee to enable.  https://summer.fi/<any vault ID> to disable.
    AaveV3Arbitrum: false,
    AaveV3Borrow: false,
    AaveV3EarncbETHeth: false,
    AaveV3EarnrETHeth: false,
    AaveV3History: false,
    AaveV3Multiply: false,
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
    ProxyCreationDisabled: false,
    ProxyReveal: false,
    ReadOnlyAutoTakeProfit: false,
    ReadOnlyBasicBS: false,
    Referrals: true,
    Sillyness: false,
    SparkProtocol: true,
    SparkProtocolBorrow: true,
    SparkProtocolEarn: true,
    SparkProtocolMultiply: true,
    SparkProtocolSDAIETH: false,
    StopLossOpenFlow: false,
    StopLossRead: true,
    StopLossWrite: true,
    TestFeature: false, // used in unit tests
    UseNetworkSwitcher: true,
    UseNetworkSwitcherArbitrum: false,
    UseNetworkSwitcherForks: false,
    UseNetworkSwitcherOptimism: true,
    UseNetworkSwitcherTestnets: false,
  };
}
