import { ConfigHelperType } from "⌨️";
import { getFleetConfig } from "./getFleetConfig";
import { getLinks } from "./getLinks";
import { getFeatures } from "./getFeatures";

export default function (params: ConfigHelperType) {
  return {
    links: getLinks(params),
    fleetMap: getFleetConfig(),
    features: getFeatures(params),
    maintenance: false,
  };
}
