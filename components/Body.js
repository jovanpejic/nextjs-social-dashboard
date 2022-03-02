import { VStack, Text, Container } from "@chakra-ui/react";
import Card from "./Card";
import Post from "./Post";

const Body = () => {
  return (
    <VStack width="100%" height="100vh">
      <Container maxWidth="container.md" centerContent>
        <Post />
        <Card />
      </Container>
    </VStack>
  );
};

export default Body;
