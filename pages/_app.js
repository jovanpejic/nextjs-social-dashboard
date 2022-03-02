import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
