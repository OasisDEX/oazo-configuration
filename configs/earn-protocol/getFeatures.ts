import { ConfigHelperType } from "⌨️";

export const getFeatures = ({
  isStaging: _isStaging,
  isDevelopment: _isDevelopment,
}: ConfigHelperType) => ({
  Migrations: true,
  Send: true,
});
