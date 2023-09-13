import { ConfigHelperType } from "⌨️";

export default function ({ isStaging, notProduction }: ConfigHelperType) {
  return {
    TestConfigTestValueAlwaysFalse: false,
    TestConfigTestValueAlwaysTrue: true,
    TestConfigTestValueFalseOnProductionTrueOnOthers: notProduction
      ? true
      : false,
    TestConfigTestValueTrueOnStaging: isStaging ? true : false,
    TestValueFromSecret: process.env.TEST_VALUE_FROM_SECRET,
  };
}
