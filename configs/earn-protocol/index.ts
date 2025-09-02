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
    bannerMessage: "We are aware of an issue with our subgraph provider causing Mainnet balances (including deposits and withdrawals) to not update correctly. Our team is monitoring the situation. If you need more support, please contact us on discord",
    deployment: params,
  };
}
