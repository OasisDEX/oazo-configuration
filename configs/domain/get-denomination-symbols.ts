import {DenominationSymbol} from "🤝";
import {EnumToObject, enumToObject} from "🛠️";

export const getDenominationSymbols = (): EnumToObject<typeof DenominationSymbol> => {
    return enumToObject(DenominationSymbol)
};