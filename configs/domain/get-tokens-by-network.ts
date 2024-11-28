import {
  ADDRESSES,
  ADDRESS_ZERO,
  Common,
  SystemKeys,
} from '@oasisdex/addresses';
import {
  IToken,
  Network,
  TokenByTokenSymbol,
  TokenSymbol,
  tokenByTokenSymbol,
} from '🤝';

type TokenSubset = {
  [key in TokenSymbol]?: IToken;
};

type NetworkTokens = {
  [network in Network]: TokenSubset[];
};

/**
 * Returns tokens for each network
 * Can be enhanced to return address enriched tokens for each network
 */
export const getTokensByNetwork = (): NetworkTokens => {
  const mainnetCommon = ADDRESSES[Network.MAINNET][SystemKeys.COMMON];
  const optimismCommon = ADDRESSES[Network.OPTIMISM][SystemKeys.COMMON];
  const arbitrumCommon = ADDRESSES[Network.ARBITRUM][SystemKeys.COMMON];
  const baseCommon = ADDRESSES[Network.BASE][SystemKeys.COMMON];

  return {
    [Network.MAINNET]: [...generateEntries(tokenByTokenSymbol, mainnetCommon)],
    [Network.OPTIMISM]: [
      ...generateEntries(tokenByTokenSymbol, optimismCommon),
    ],
    [Network.ARBITRUM]: [
      ...generateEntries(tokenByTokenSymbol, arbitrumCommon),
    ],
    [Network.BASE]: [...generateEntries(tokenByTokenSymbol, baseCommon)],
  };
};

function generateEntries(
  tokenByTokenSymbol: TokenByTokenSymbol,
  networkCommonAddresses: Record<Common, string>
) {
  const entries = [];

  for (const tokenSymbol in tokenByTokenSymbol) {
    // We're forcing the type here because we know that the tokenSymbol is (or should be) a key of Tokens
    let address;
    if (tokenSymbol === 'USDCE') {
      address = networkCommonAddresses['USDC.E'];
    } else {
      address =
        networkCommonAddresses[
          tokenSymbol as keyof typeof networkCommonAddresses
        ];
    }

    // Check if the address is neither ZERO_ADDRESS nor an empty string.
    // Also in case there's no overlap between tokenSymbols and networkCommonAddresses ignore the tokenSymbol
    if (address && address !== '' && address !== ADDRESS_ZERO) {
      const tokenObject = {
        [tokenSymbol]: tokenByTokenSymbol[tokenSymbol as TokenSymbol]
          .setAddress(address)
          .toObject(),
      };
      entries.push(tokenObject);
    }
  }

  return entries;
}
