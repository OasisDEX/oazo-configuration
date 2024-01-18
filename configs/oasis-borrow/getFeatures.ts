import { ConfigHelperType } from "⌨️";

export const getFeatures = ({ isStaging: _isStaging }: ConfigHelperType) => ({
  AaveV3ArbitrumBorrow: true,
  AaveV3ArbitrumEarn: false,
  AaveV3EarncbETHeth: false,
  AaveV3EarnrETHeth: false,
  AaveV3History: true,
  AaveV3OptimismBorrow: true,
  AaveV3OptimismEarn: false,
  AaveV3Protection: true,
  AaveV3ProtectionWrite: true,
  AaveV3OptimizationEthereum: false,
  AaveV3OptimizationOptimism: false,
  AaveV3OptimizationArbitrum: false,
  AaveV3OptimizationBase: false,
  AjnaBase: false,
  AjnaPoolFinder: true,
  AjnaSafetySwitch: false,
  AjnaSuppressValidation: false,
  MorphoSafetySwitch: false,
  MorphoSuppressValidation: false,
  AnotherTestFeature: true, // used in unit tests
  BaseNetworkEnabled: true,
  ConstantMultipleReadOnly: false,
  DaiSavingsRate: true,
  DisableSidebarScroll: false,
  FollowAAVEVaults: false,
  MorphoBlue: false,
  NewNavigation: true,
  ProxyCreationDisabled: false,
  ProxyReveal: false,
  ReadOnlyAutoTakeProfit: false,
  ReadOnlyBasicBS: false,
  Referrals: true,
  Sillyness: false,
  SparkProtocolStopLoss: true,
  SparkOptimization: false,
  StopLossOpenFlow: false,
  StopLossRead: true,
  StopLossWrite: true,
  TestFeature: false, // used in unit tests
  UseNetworkSwitcherForks: false,
  UseNetworkSwitcherTestnets: false,
  UseRpcGateway: true,
  NewPortfolio: true,
  OmniPnlModal: false,
  MakerTenderly: false,
  SparkWBTCDAI: true,
  AaveLikeSimpleEarnSafetySwitch: false,
  AaveLikeSimpleEarnSuppressValidation: false,
});
