import { ConfigHelperType } from "⌨️";
import { getFeatures } from "./getFeatures";
import { getFleetConfig } from "./getFleetConfig";
import { getLinks } from "./getLinks";

export default function (params: ConfigHelperType) {
  return {
    links: getLinks(params),
    fleetMap: getFleetConfig(),
    features: getFeatures(params),
    maintenance: false,
  };
}
