import { Stack, HStack, VStack } from "@chakra-ui/react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <VStack>
      <Navbar />
      <Body />
      <Footer />
    </VStack>
  );
};

export default HomePage;
