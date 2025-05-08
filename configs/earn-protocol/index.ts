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
      "We're currently deploying an update to the app. Some features may be temporarily unavailable. Please check back in 10 minutes if you encounter any issues. Thank you for your patience!",
  };
}
