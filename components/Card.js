import React from "react";
import {
  Flex,
  Heading,
  VStack,
  HStack,
  Button,
  Container,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Card = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
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
    </Container>
  );
};

export default Card;
