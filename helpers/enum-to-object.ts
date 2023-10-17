export type EnumToObject<E extends Record<string, string>> = {
    [K in keyof E]: E[K];
};

export function enumToObject<E extends Record<string, string>>(e: E): { [K in keyof E]: E[K] } {
    return Object.keys(e)
        .filter(key => isNaN(Number(key)))
        .reduce((obj, key) => {
            obj[key as keyof E] = e[key as keyof E];
            return obj;
        }, {} as { [K in keyof E]: E[K] });
}