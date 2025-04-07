import { ConfigHelperType } from "⌨️";
import { getFeatures } from "./getFeatures";
import { getFleetConfig } from "./getFleetConfig";
import { getLinks } from "./getLinks";

export default function (params: ConfigHelperType) {
  return {
    links: getLinks(params),
    fleetMap: getFleetConfig(params),
    features: getFeatures(params),
    maintenance: params.isProduction,
    bannerMessage:
      "We are aware of an issue with APY values showing 0% and working on a fix.",
  };
}
