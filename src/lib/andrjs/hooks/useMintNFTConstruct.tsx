import { useCallback } from 'react';
import { Msg } from "@andromedaprotocol/andromeda.js";

interface IMintNFTData {
  tokenId: string;
  owner: string;
  tokenUri: string;
}

export default function useMintNFTConstruct() {
  const construct = useCallback((data: IMintNFTData) => {
    const msg: Msg = {
      mint: {
        token_id: data.tokenId,
        owner: data.owner,
        token_uri: data.tokenUri,
      },
    };
    return msg;
  }, []);
  return construct;
} 