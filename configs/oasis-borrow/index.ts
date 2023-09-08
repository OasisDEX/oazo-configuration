import { ConfigHelperType } from "../../types";

export default function ({
  isProduction,
  isStaging,
  isDevelopment,
  notProduction,
}: ConfigHelperType) {
  return {
    TestFeature: false, // used in unit tests
    AnotherTestFeature: true, // used in unit tests
    "🌞": false, // or https://summer.fi/harheeharheeharhee to enable.  https://summer.fi/<any vault ID> to disable.
    AaveV3Arbitrum: false,
    AaveV3Borrow: false,
    AaveV3EarncbETHeth: false,
    AaveV3EarnrETHeth: false,
    AaveV3Multiply: false,
    AaveV3History: false,
    AaveV3Protection: true,
    AaveV3ProtectionWrite: true,
    AjnaPoolFinder: true,
    AjnaReusableDPM: false,
    AjnaSafetySwitch: true,
    AjnaSuppressValidation: false,
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
    StopLossOpenFlow: false,
    StopLossRead: true,
    StopLossWrite: true,
    UseNetworkSwitcher: true,
    UseNetworkSwitcherArbitrum: false,
    UseNetworkSwitcherForks: false,
    UseNetworkSwitcherOptimism: true,
    UseNetworkSwitcherTestnets: false,
    SparkProtocol: true,
    SparkProtocolEarn: true,
    SparkProtocolBorrow: true,
    SparkProtocolMultiply: true,
    SparkProtocolSDAIETH: false,
    SomeTestingFeatureIWantToTest: isProduction ? false : true,
    SomeOtherTestingFeatureIWantToTest: notProduction ? false : true,
  };
}
