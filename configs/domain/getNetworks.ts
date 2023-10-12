import {EnumToObject, enumToObject} from "🛠️";
import {Networks} from "🤝";

export const getNetworks = (): EnumToObject<typeof Networks> => {
    return enumToObject(Networks)
};