import { ConfigHelperType } from "⌨️";

export default function ({
  isProduction,
  isStaging,
  isDevelopment,
  notProduction,
}: ConfigHelperType) {
  return {
    TestConfigTestValueAlwaysTrue: true,
    TestConfigTestValueAlwaysFalse: false,
    TestConfigTestValueFalseOnProductionTrueOnOthers: notProduction
      ? true
      : false,
    TestConfigTestValueTrueOnStaging: isStaging ? true : false,
  };
}
