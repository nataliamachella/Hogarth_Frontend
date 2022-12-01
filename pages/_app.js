import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
