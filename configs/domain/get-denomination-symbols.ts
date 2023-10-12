import {DenominationSymbols} from "🤝";
import {EnumToObject, enumToObject} from "🛠️";

export const getDenominationSymbols = (): EnumToObject<typeof DenominationSymbols> => {
    return enumToObject(DenominationSymbols)
};