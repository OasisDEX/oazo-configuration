import { ConfigHelperType } from "⌨️";

type PickConfigHelper = Pick<ConfigHelperType, "notProduction">;

export const getRpcConfig = ({ notProduction }: PickConfigHelper) => ({
  skipCache: false,
  skipMulticall: false,
  skipGraph: true,
  source: notProduction ? "borrow-staging" : "borrow-prod",
});
