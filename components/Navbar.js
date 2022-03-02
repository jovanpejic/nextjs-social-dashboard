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
} from "@chakra-ui/react";
import { FaHandPeace } from "react-icons/fa";
import { BiWalletAlt, BiMoon } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="container.md"
      height="60px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <HStack>
        <Icon size="lg" as={FaHandPeace} />
        <Heading size="md">Social Portal</Heading>
      </HStack>
      <HStack>
        <Button
          size="md"
          leftIcon={<BiWalletAlt />}
          colorScheme="blue"
          variant="solid">
          Connect
        </Button>
        <IconButton
          colorScheme="yellow"
          p={3}
          as={BsFillMoonStarsFill}
          onClick={toggleColorMode}
        />
      </HStack>
    </Container>
  );
};

export default Navbar;
