import { ConfigHelperType } from "⌨️";

export const getFeatures = ({ isStaging }: ConfigHelperType) => ({
  Migrations: isStaging,
});
