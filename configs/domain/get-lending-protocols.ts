import { LendingProtocol, LendingProtocolLabel } from "🤝";

type LendingProtocolLabelValueType = typeof LendingProtocolLabel[keyof typeof LendingProtocolLabel];
type LabelByLendingProtocol = Record<LendingProtocol, LendingProtocolLabelValueType>;

export const getLabelByLendingProtocol = (): LabelByLendingProtocol => {
    return {
        [LendingProtocol.AaveV2]: LendingProtocolLabel.aavev2,
        [LendingProtocol.AaveV3]: LendingProtocolLabel.aavev3,
        [LendingProtocol.Ajna]: LendingProtocolLabel.ajna,
        [LendingProtocol.Maker]: LendingProtocolLabel.maker,
        [LendingProtocol.SparkV3]: LendingProtocolLabel.sparkv3,
    }
};