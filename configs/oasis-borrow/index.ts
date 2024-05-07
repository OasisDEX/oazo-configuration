import { ConfigHelperType } from "⌨️";
import { getFeatures } from "./getFeatures";
import { getNavigation } from "./getNavigation";
import { getParameters } from "./getParameters";
import { getRpcConfig } from "./getRpcConfig";

export default function (params: ConfigHelperType) {
  return {
    features: getFeatures(params),
    parameters: getParameters(params),
    navigation: getNavigation(),
    rpcConfig: getRpcConfig(params),
  };
}
