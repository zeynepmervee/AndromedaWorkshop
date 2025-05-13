import React, { FC, useState } from 'react';
import { Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, NumberInput, NumberInputField, VStack, Input } from '@chakra-ui/react';
import { useExecuteModal } from '@/modules/modals/hooks';
import { useMintNFTConstruct, useStartAuctionConstruct } from '@/lib/andrjs/hooks';

interface MintAndAuctionButtonProps {
  contractAddress: string;
  auctionAddress: string;
  onSuccess?: () => void;
}

const MintAndAuctionButton: FC<MintAndAuctionButtonProps> = ({
  contractAddress,
  auctionAddress,
  onSuccess,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tokenUri, setTokenUri] = useState('');
  const [minBid, setMinBid] = useState('');
  const [duration, setDuration] = useState('');
  const toast = useToast();
  
  const mintConstruct = useMintNFTConstruct();
  const auctionConstruct = useStartAuctionConstruct();
  const openExecute = useExecuteModal(contractAddress);

  const handleMintAndAuction = async () => {
    try {
      // Generate a unique token ID
      const tokenId = Date.now().toString();
      
      // Mint the NFT
      const mintMsg = mintConstruct({
        tokenId,
        owner: '', // Will be filled by wallet
        tokenUri,
      });

      await openExecute(mintMsg, true);

      // Start the auction
      const auctionMsg = auctionConstruct({
        tokenId,
        tokenAddress: contractAddress,
        minBid: parseFloat(minBid),
        duration: parseInt(duration) * 3600, // Convert hours to seconds
      });

      await openExecute(auctionMsg, true);
      
      toast({
        title: 'NFT Minted and Auction Started Successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setIsOpen(false);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        colorScheme="blue"
        size="lg"
        width="full"
        data-testid="mint-and-auction-button"
      >
        Mint NFT & Start Auction
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mint NFT & Start Auction</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Token URI</FormLabel>
                <Input
                  value={tokenUri}
                  onChange={(e) => setTokenUri(e.target.value)}
                  placeholder="Enter token URI"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Minimum Bid</FormLabel>
                <NumberInput min={0}>
                  <NumberInputField
                    value={minBid}
                    onChange={(e) => setMinBid(e.target.value)}
                    placeholder="Enter minimum bid amount"
                  />
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Duration (hours)</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Enter auction duration in hours"
                  />
                </NumberInput>
              </FormControl>

              <Button
                colorScheme="blue"
                onClick={handleMintAndAuction}
                width="full"
                isDisabled={!tokenUri || !minBid || !duration}
              >
                Mint & Start Auction
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MintAndAuctionButton; 