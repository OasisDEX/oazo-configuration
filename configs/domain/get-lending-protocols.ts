import { LendingProtocol, LendingProtocolLabel } from "🤝";

type LendingProtocolLabelValueType = typeof LendingProtocolLabel[keyof typeof LendingProtocolLabel];

export const getLendingProtocols = (): Record<LendingProtocol, LendingProtocolLabelValueType> => {
    return {
        [LendingProtocol.AaveV2]: LendingProtocolLabel.aavev2,
        [LendingProtocol.AaveV3]: LendingProtocolLabel.aavev3,
        [LendingProtocol.Ajna]: LendingProtocolLabel.ajna,
        [LendingProtocol.Maker]: LendingProtocolLabel.maker,
        [LendingProtocol.SparkV3]: LendingProtocolLabel.sparkv3,
    }
};