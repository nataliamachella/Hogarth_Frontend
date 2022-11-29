import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@fontsource/raleway/400.css";
import "@fontsource/inter/700.css";
import theme from "../public/fonts/theme";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      {router.pathname == "/admin" ? null : <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
