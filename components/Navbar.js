import React from "react";
import {
  Container,
  Heading,
  Icon,
  Button,
  IconButton,
  HStack,
  VStack,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FaHandPeace } from "react-icons/fa";
import { BiWalletAlt, BiMoon } from "react-icons/bi";
import { BsSticky, BsSun, BsMoon } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useMetaMask } from "metamask-react";
import { RiRocketFill } from "react-icons/ri";
import {
  AiFillGithub,
  AiOutlineMenu,
  AiFillTwitterCircle,
} from "react-icons/ai";
import NextLink from "next/link";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  function checkStatus() {
    if (status === "initializing")
      return (
        <Button size="md" colorScheme="transparent" isLoading>
          Connect
        </Button>
      );

    if (status === "unavailable")
      return (
        <Text isTruncated fontSize="x-small">
          Install MetaMask
        </Text>
      );

    if (status === "notConnected")
      return (
        <Button
          size="md"
          colorScheme="transparent"
          onClick={connect}
          fontSize="md">
          Connect
        </Button>
      );

    if (status === "connecting")
      return (
        <Button size="md" colorScheme="transparent" isLoading>
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
            <motion.div whileHover={{ rotate: 20 }}>
              <Icon size="lg" as={FaHandPeace} />
            </motion.div>
            <Heading size="md">Wave Portal</Heading>
          </HStack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.5 }}>
          <Flex
            mr={20}
            alignItems="center"
            justifyContent="flex-start"
            display={{ base: "none", md: "flex" }}>
            <Flex mr={3} alignItems="center">
              <Icon mr={1} fontSize="lg" as={RiRocketFill} />
              <NextLink
                href="https://nextjs-portfolio-lac-delta.vercel.app/"
                passHref>
                <a target="_blank">
                  <Link>Portfolio</Link>
                </a>
              </NextLink>
            </Flex>
            <Flex mr={3} alignItems="center">
              <Icon mr={1} as={AiFillTwitterCircle} />
              <NextLink href="https://twitter.com/eth_jovan_eth" passHref>
                <a target="_blank">
                  <Link>Twitter</Link>
                </a>
              </NextLink>
            </Flex>
            <Flex alignItems="center">
              <Icon mr={1} as={AiFillGithub} />
              <NextLink href="https://github.com/jovanpejic/" passHref>
                <a target="_blank">
                  <Link>Github</Link>
                </a>
              </NextLink>
            </Flex>
          </Flex>
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
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <IconButton
                  aria-label="Toggle theme"
                  colorScheme={useColorModeValue("purple", "yellow")}
                  icon={useColorModeValue(<BsMoon />, <BsSun />)}
                  onClick={toggleColorMode}></IconButton>
              </motion.div>
            </AnimatePresence>
            <Flex display={{ base: "inline", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<AiOutlineMenu />}
                  colorScheme="pink"
                  _focus={{ colorScheme: "pink" }}
                />
                <MenuList>
                  <NextLink
                    href="https://nextjs-portfolio-lac-delta.vercel.app/"
                    passHref>
                    <a target="_blank">
                      <MenuItem>Portfolio</MenuItem>
                    </a>
                  </NextLink>
                  <NextLink href="https://twitter.com/eth_jovan_eth" passHref>
                    <a target="_blank">
                      <MenuItem>Twitter</MenuItem>
                    </a>
                  </NextLink>
                  <NextLink href="https://github.com/jovanpejic/" passHref>
                    <a target="_blank">
                      <MenuItem>Github</MenuItem>
                    </a>
                  </NextLink>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </motion.div>
      </Container>
    </VStack>
  );
};

export default Navbar;
