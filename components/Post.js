import React from "react";
import { Flex, Heading, VStack, HStack, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";

const Post = () => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const color = useColorModeValue("black", "white");
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const [currentAccount, setCurrentAccount] = useState(null);
  const [waveArray, setWaveArray] = useState([]);
  const [totalWaves, setTotalWaves] = useState(0);

  const contractAddress = "0xb80dc9517caba87ac6c1b972bb4d28fb2303a4c0";
  const contractABI = [
    {
      inputs: [],
      stateMutability: "payable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "Log",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "NewWave",
      type: "event",
    },
    {
      inputs: [],
      name: "getAllWaves",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "waver",
              type: "address",
            },
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          internalType: "struct WavePortal.Wave[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTotalWaves",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "lastWavedAt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_message",
          type: "string",
        },
      ],
      name: "wave",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const waveAtMe = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let userMessage = document.getElementById("userInput").value;
        const waveTxn = await wavePortalContract.wave(userMessage, {
          gasLimit: 300000,
        });
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined --", waveTxn.hash);
        document.getElementById("userInput").value = null;
        console.log("User input is reset");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack
      width="400px"
      mb={20}
      p={5}
      borderRadius={10}
      bg={bg}
      color={color}
      boxShadow="md"
      display={status === "connected" ? "flex" : "none"}>
      <Heading fontSize="lg">What's on your mind?</Heading>
      <HStack>
        <Input
          variant="filled"
          borderRadius={5}
          size="sm"
          width="250px"
          placeholder="Your message here..."
          id="userInput"></Input>
        <Button size="sm" colorScheme="pink" onClick={() => waveAtMe()}>
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default Post;
