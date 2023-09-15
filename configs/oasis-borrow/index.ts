import { ConfigHelperType } from "⌨️";

export default function ({ isDevelopment: _isDevelopment, isStaging }: ConfigHelperType) {
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
    },
  };
}
