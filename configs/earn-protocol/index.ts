import { ConfigHelperType } from "⌨️";
import { getFleetConfig } from "./getFleetConfig";
import { getLinks } from "./getLinks";

export default function (params: ConfigHelperType) {
  return {
    links: getLinks(params),
    fleetMap: getFleetConfig(),
    maintenance: false,
  };
}
