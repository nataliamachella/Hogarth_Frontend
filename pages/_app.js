import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
//import theme from "../utils/theme"
import { useRouter } from "next/router";
import "@fontsource/raleway/400.css";
import "@fontsource/inter/700.css";
import theme from "../public/fonts/theme";
import SidebarAdmin from "../commons/Admin/SidebarAdmin";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      {router.asPath.slice(0, 6) == "/admin" ? <SidebarAdmin /> : <Navbar />}

      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
