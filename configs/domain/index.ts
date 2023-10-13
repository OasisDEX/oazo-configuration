import {getDenominationSymbols} from "./get-denomination-symbols";
import {getLendingProtocols} from "./get-lending-protocols";
import {getNetworks} from "./get-networks";
import {getTokensByNetwork} from "./get-tokens-by-network";
import {getTokensByTokenSymbol} from "./get-tokens-by-token-symbol";

export default function () {
    /**
     * Goal is to capture domain specific configurations that is common
     * across all Summer.fi systems and apps.
     *
     * Possible extensions could include Products / Product categories / Strategies etc
     */
    return {
        tokens: getTokensByTokenSymbol(),
        tokensByNetwork: getTokensByNetwork(),
        lendingProtocols: getLendingProtocols(),
        networks: getNetworks(),
        denominationSymbols: getDenominationSymbols()
    };
}
