import {EnumToObject, enumToObject} from "🛠️";
import {Network} from "🤝";

export const getNetworkNameByNetwork = (): EnumToObject<typeof Network> => {
    return enumToObject(Network)
};