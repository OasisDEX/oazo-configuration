import { ConfigHelperType } from "⌨️";
import { getFeatures } from "./getFeatures";
import { getFleetConfig } from "./getFleetConfig";
import { getLinks } from "./getLinks";

export default function (params: ConfigHelperType) {
  return {
    links: getLinks(params),
    fleetMap: getFleetConfig(params),
    features: getFeatures(params),
    maintenance: false,
    bannerMessage:
      "We are aware of an issues with APY values showing 0% and slow loading. We're working on a fix.",
  };
}
