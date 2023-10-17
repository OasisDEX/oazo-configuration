import {DenominationSymbol} from "🤝";
import {EnumToObject, enumToObject} from "🛠️";

export const getLabelByDenominationSymbols = (): EnumToObject<typeof DenominationSymbol> => {
    return enumToObject(DenominationSymbol)
};