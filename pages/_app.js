import { ChakraProvider } from "@chakra-ui/react";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </ChakraProvider>
  );
}

export default MyApp;
