/**
 * Enum representing various lending protocols supported by the platform.
 * This provides a standardized way to reference these protocols throughout the application.
 */
export enum LendingProtocol {
    AaveV2 = 'aavev2',   // Aave Version 2
    AaveV3 = 'aavev3',   // Aave Version 3
    Ajna = 'ajna',       // Ajna Protocol
    Maker = 'maker',     // MakerDAO
    SparkV3 = 'sparkv3', // Spark Version 3
}

/**
 * Object mapping lending protocols to their human-readable labels.
 * This can be used for display purposes in UI components.
 */
export const LendingProtocolLabel = {
    [LendingProtocol.AaveV2]: 'Aave V2',
    [LendingProtocol.AaveV3]: 'Aave V3',
    [LendingProtocol.Ajna]: 'Ajna',
    [LendingProtocol.Maker]: 'Maker',
    [LendingProtocol.SparkV3]: 'Spark',
}
