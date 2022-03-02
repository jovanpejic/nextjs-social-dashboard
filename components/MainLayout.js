import { Stack, HStack, VStack } from "@chakra-ui/react";
import { children } from "react/cjs/react.production.min";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <VStack>
      <Navbar />
      {children}
      <Footer />
    </VStack>
  );
};

export default MainLayout;
