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
} from "@chakra-ui/react";
import { FaHandPeace } from "react-icons/fa";
import { BiWalletAlt, BiMoon } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
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
        </motion.div>
      </Container>
    </VStack>
  );
};

export default Navbar;
