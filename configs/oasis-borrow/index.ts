import { ConfigHelperType } from "⌨️";
import { getFeatures } from "./getFeatures";
import { getNavigation } from "./getNavigation";
import { getParameters } from "./getParameters";

export default function ({
  isDevelopment: _isDevelopment,
  notProduction,
  isStaging,
}: ConfigHelperType) {
  return {
    features: getFeatures({ isStaging }),
    parameters: getParameters({ notProduction }),
    navigation: getNavigation,
  }
}
