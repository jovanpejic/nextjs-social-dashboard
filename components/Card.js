import React from "react";
import {
  Flex,
  Heading,
  VStack,
  Container,
  Text,
  Spacer,
  Box,
  Avatar,
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { generateFromString } from "generate-avatar";

const Card = ({ wave }) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <motion.div
      initial={{ opacity: 0, y: +20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}>
      <Container
        width="450px"
        height="200px"
        overflow="scroll"
        mt={5}
        p={5}
        borderRadius={5}
        bg={bg}
        color={color}
        boxShadow="md">
        <VStack alignItems="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="small" color="green.500">
              POST
            </Heading>
            <Avatar
              size="md"
              showBorder="true"
              name={wave.address}
              src={`data:image/svg+xml;utf8,${generateFromString(
                wave.address
              )}`}
            />
          </Flex>

          <Spacer></Spacer>
          <Text fontSize="medium" fontWeight="semibold">
            {wave.message}
          </Text>
          <Box>
            <Text fontSize="small">From: {wave.address}</Text>
            <Text fontSize="small">Date: {wave.timestamp}</Text>
          </Box>
        </VStack>
      </Container>
    </motion.div>
  );
};

export default Card;
