import { ConfigHelperType } from "⌨️";
import { getProducts } from "./getProducts";

export default function (_: ConfigHelperType) {
    return {
        products: getProducts(),
    };
}
