import { Stack, HStack, VStack } from "@chakra-ui/react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { FaHandPeace } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <VStack>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Wave Portal" />
          <meta name="author" content="Jovan" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/Hands.ico" type="image/x-icon" />
          <title>Wave Portal</title>
        </Head>
        <Navbar />
        <Body />
      </VStack>

      <Footer />
    </>
  );
};

export default HomePage;
