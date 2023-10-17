import {getLabelByDenominationSymbol} from "./get-denomination-symbol";
import {getLabelByLendingProtocol} from "./get-lending-protocols";
import {getNetworkNameByNetwork} from "./get-networks";
import {getTokenByTokenSymbol} from "./get-tokens-by-token-symbol";
import {getTokensByNetwork} from "./get-tokens-by-network";

export default function () {
    /**
     * Goal is to capture domain specific configurations that is common
     * across all Summer.fi systems and apps.
     *
     * Possible extensions could include Products / Product categories / Strategies etc
     */
    return {
        tokenByTokenSymbol: getTokenByTokenSymbol(),
        tokensByNetwork: getTokensByNetwork(),
        labelByLendingProtocol: getLabelByLendingProtocol(),
        networkNameByNetwork: getNetworkNameByNetwork(),
        labelByDenominationSymbol: getLabelByDenominationSymbol()
    };
}
