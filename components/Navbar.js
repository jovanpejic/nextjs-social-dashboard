import React from "react";
import {
  Container,
  Box,
  Heading,
  Icon,
  Flex,
  Button,
  IconButton,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FaHandPeace } from "react-icons/fa";
import { BiWalletAlt, BiMoon } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMetaMask } from "metamask-react";
import { useEffect } from "react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  function checkStatus() {
    if (status === "initializing")
      return (
        <Text isTruncated fontSize="x-small">
          Initilizing
        </Text>
      );

    if (status === "unavailable")
      return (
        <Text isTruncated fontSize="x-small">
          Install MetaMask
        </Text>
      );

    if (status === "notConnected")
      return (
        <Button colorScheme="transparent" onClick={connect} fontSize="md">
          Connect
        </Button>
      );

    if (status === "connecting")
      return (
        <Button colorScheme="transparent" isLoading>
          Connect
        </Button>
      );

    if (status === "connected")
      return (
        <Text>
          {account.substring(0, 4)}..
          {account.substring(account.length - 4, account.length)}
        </Text>
      );

    return null;
  }

  useEffect(() => {
    checkStatus();
  }, []);

  console.log(status);
  return (
    <VStack
      width="100%"
      bg={bg}
      color={color}
      position="fixed"
      opacity={0.8}
      backdropFilter="auto"
      backdropBlur="20px"
      zIndex="1">
      <Container
        maxW="container.md"
        height="60px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.5 }}>
          <HStack>
            <Icon size="lg" as={FaHandPeace} />
            <Heading size="md">Social Portal</Heading>
          </HStack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.5 }}>
          <HStack>
            <Button
              size="md"
              maxWidth={125}
              leftIcon={<BiWalletAlt />}
              colorScheme="blue"
              variant="solid"
              overflow="clip">
              {checkStatus()}
            </Button>
            <IconButton
              colorScheme="yellow"
              p={3}
              as={BsFillMoonStarsFill}
              onClick={toggleColorMode}
            />
          </HStack>
        </motion.div>
      </Container>
    </VStack>
  );
};

export default Navbar;
