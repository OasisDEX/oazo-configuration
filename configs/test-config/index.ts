import { ConfigHelperType } from "⌨️";

export default function ({ isStaging, notProduction }: ConfigHelperType) {
  return {
    TestConfigTestValueAlwaysTrue: true,
    TestConfigTestValueAlwaysFalse: false,
    TestConfigTestValueFalseOnProductionTrueOnOthers: notProduction
      ? true
      : false,
    TestConfigTestValueTrueOnStaging: isStaging ? true : false,
  };
}
