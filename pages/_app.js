import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
