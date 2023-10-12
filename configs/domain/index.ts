import {getDenominationSymbols} from "./getDenominationSymbols";
import {getLendingProtocols} from "./getLendingProtocols";
import {getNetworks} from "./getNetworks";
import {getTokens} from "./getTokens";
import {getTokensByNetwork} from "./getTokensByNetwork";

export default function () {
    /**
     * Goal is to capture domain specific configurations that is common
     * across all Summer.fi systems and apps.
     *
     * Possible extensions could include Products / Product categories / Strategies etc
     */
    return {
        tokens: getTokens(),
        tokensByNetwork: getTokensByNetwork(),
        lendingProtocols: getLendingProtocols(),
        networks: getNetworks(),
        denominationSymbols: getDenominationSymbols()
    };
}
