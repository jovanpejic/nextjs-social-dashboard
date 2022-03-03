import React from "react";
import {
  Flex,
  Heading,
  VStack,
  HStack,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Card = ({ wave }) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.0, duration: 0.5 }}>
      <Container
        width="450px"
        mt={5}
        p={5}
        borderRadius={1}
        bg={bg}
        color={color}>
        <Heading fontSize="x-small" color="green.500">
          POST
        </Heading>
        <Text>{wave.message}</Text>
        <Text>{wave.address}</Text>
        <Text>{wave.timestamp}</Text>
      </Container>
    </motion.div>
  );
};

export default Card;
