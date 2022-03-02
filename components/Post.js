import React from "react";
import { Flex, Heading, VStack, HStack, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Post = () => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const color = useColorModeValue("black", "white");
  return (
    <VStack
      width="400px"
      mt={20}
      mb={20}
      p={5}
      borderRadius={10}
      bg={bg}
      color={color}
      boxShadow="md">
      <Heading fontSize="lg">What do you have in mind?</Heading>
      <HStack>
        <Input
          variant="filled"
          borderRadius={5}
          size="sm"
          width="250px"
          placeholder="Your message here..."></Input>
        <Button size="sm" colorScheme="pink">
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default Post;
