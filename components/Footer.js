import React from "react";
import { Stack, VStack, Container, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Stack
      width="100%"
      height="60px"
      bg={bg}
      color={color}
      justifyContent="center">
      <Container maxWidth="container.md" centerContent>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Built by Ξ Jovan Ξ .
        </Text>
      </Container>
    </Stack>
  );
};

export default Footer;
