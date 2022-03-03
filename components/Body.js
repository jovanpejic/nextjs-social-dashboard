import {
  VStack,
  Container,
  Flex,
  Heading,
  Divider,
  IconButton,
  Alert,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";
import Card from "./Card";
import Post from "./Post";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { useColorModeValue } from "@chakra-ui/react";
import { FiChevronDown, FiChevronsUp } from "react-icons/fi";
import { useMetaMask } from "metamask-react";

const Body = () => {
  const [display, setDisplay] = useState("hide");
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

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

  const loadAllWaves = async () => {
    const { ethereum } = window;

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

        const _waveArray = await wavePortalContract.getAllWaves();

        let wavesCleaned = _waveArray.map((wave) => {
          return {
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000).toLocaleString(),
            message: wave.message,
          };
        });

        setWaveArray(wavesCleaned);
        console.log("Waves loaded into array");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let wavePortalContract;
    const onNewWave = (from, timestamp, message) => {
      console.log("NewWave", from, timestamp, message);
      setWaveArray((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000).toLocaleString(),
          message: message,
        },
      ]);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);

  const numberOfWaves = async () => {
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

        const _totalWaves = await wavePortalContract.getTotalWaves();
        setTotalWaves(_totalWaves);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  waveArray.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  function checkStatus() {
    if (status === "initializing")
      return (
        <Flex justifyContent="center">
          <Alert status="info">
            <AlertIcon />
            <AlertTitle>Initilizing MetaMask!</AlertTitle>
          </Alert>
        </Flex>
      );

    if (status === "unavailable")
      return (
        <Flex justifyContent="center">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>MetaMask is not installed!</AlertTitle>
          </Alert>
        </Flex>
      );

    if (status === "notConnected")
      return (
        <Flex justifyContent="center">
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle>MetaMask is not connected!</AlertTitle>
          </Alert>
        </Flex>
      );

    if (status === "connecting")
      return (
        <Flex justifyContent="center">
          <Alert status="info">
            <AlertIcon />
            <AlertTitle>Connecting to MetaMask!</AlertTitle>
          </Alert>
        </Flex>
      );

    if (status === "connected") {
      loadAllWaves();
      return <Heading fontSize="md">Latest Posts</Heading>;
    }

    return null;
  }

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <VStack width="100%" minHeight="100vh">
      <Container maxWidth="container.md" centerContent mt={20}>
        <Post />
        <VStack>{checkStatus()}</VStack>
        <VStack
          height="auto"
          overflow="scroll"
          mb={5}
          display={status === "connected" ? "flex" : "none"}>
          {waveArray.slice(1, 2).map((waves) => (
            <Card wave={waves}></Card>
          ))}
        </VStack>
        <Flex align="center" display={status === "connected" ? "flex" : "none"}>
          <Divider orientation="horizontal" />
          <IconButton
            onClick={() => {
              if (display == "show") {
                setDisplay("none");
              } else {
                setDisplay("show");
              }
            }}
            icon={display == "show" ? <FiChevronsUp /> : <FiChevronDown />}
          />
          <Divider />
        </Flex>
        {display == "show" && status === "connected" && (
          <>
            <VStack height="50vh" overflow="scroll" mb={2}>
              {waveArray.slice(2).map((waves) => (
                <Card wave={waves}></Card>
              ))}
            </VStack>
          </>
        )}
      </Container>
    </VStack>
  );
};

export default Body;
