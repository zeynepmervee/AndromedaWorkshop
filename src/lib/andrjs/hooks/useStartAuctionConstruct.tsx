import { useCallback } from 'react';
import { Msg } from "@andromedaprotocol/andromeda.js";

interface IStartAuctionData {
  tokenId: string;
  tokenAddress: string;
  minBid: number;
  duration: number;
}

export default function useStartAuctionConstruct() {
  const construct = useCallback((data: IStartAuctionData) => {
    const msg: Msg = {
      start_auction: {
        token_id: data.tokenId,
        token_address: data.tokenAddress,
        min_bid: data.minBid.toString(),
        duration: data.duration.toString(),
      },
    };
    return msg;
  }, []);
  return construct;
} 