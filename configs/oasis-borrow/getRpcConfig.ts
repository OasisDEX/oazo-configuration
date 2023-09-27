import { ConfigHelperType } from "⌨️";

type PickConfigHelper = Pick<ConfigHelperType, "notProduction">;

export const getRpcConfig = ({ notProduction }: PickConfigHelper) => ({
  skipCache: false,
  skipMulticall: false,
  skipGraph: true,
  stage: notProduction ? "staging" : "prod",
  source: notProduction ? "borrow-staging" : "borrow-prod",
});
