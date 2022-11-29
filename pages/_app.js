import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ChakraProvider>
      {router.pathname == "/admin" ? null : <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
