import {EnumToObject, enumToObject} from "🛠️";
import {Network} from "🤝";

export const getNetworks = (): EnumToObject<typeof Network> => {
    return enumToObject(Network)
};