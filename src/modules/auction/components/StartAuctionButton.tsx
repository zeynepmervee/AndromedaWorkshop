import React, { FC, useState } from 'react';
import { Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack } from '@chakra-ui/react';
import { useExecuteModal } from '@/modules/modals/hooks';
import { useStartAuctionConstruct } from '@/lib/andrjs/hooks/useStartAuctionConstruct';

interface StartAuctionButtonProps {
  tokenId: string;
  tokenAddress: string;
  auctionAddress: string;
  onSuccess?: () => void;
}

const StartAuctionButton: FC<StartAuctionButtonProps> = ({
  tokenId,
  tokenAddress,
  auctionAddress,
  onSuccess,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minBid, setMinBid] = useState('');
  const [duration, setDuration] = useState(''); // Duration in hours
  const toast = useToast();
  const construct = useStartAuctionConstruct();
  const openExecute = useExecuteModal(auctionAddress);

  const handleStartAuction = async () => {
    try {
      const msg = construct({
        tokenId,
        tokenAddress,
        minBid: parseFloat(minBid),
        duration: parseInt(duration) * 3600, // Convert hours to seconds
      });

      await openExecute(msg, true);
      
      toast({
        title: 'Auction Started Successfully',
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
        title: 'Error Starting Auction',
        description: error.message,
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
        colorScheme="green"
        size="lg"
        width="full"
        data-testid="start-auction-button"
      >
        Start Auction
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start Auction</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
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
                onClick={handleStartAuction}
                width="full"
                isDisabled={!minBid || !duration}
              >
                Start Auction
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StartAuctionButton; 