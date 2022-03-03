import { Stack, HStack, VStack } from "@chakra-ui/react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const HomePage = () => {
  return (
    <>
      <VStack>
        <Navbar />
        <Body />
      </VStack>

      <Footer />
    </>
  );
};

export default HomePage;
