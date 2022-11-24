import React from "react";

import Navbar from "../components/Navbar/Navbar";

import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import { ChakraProvider } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <ChakraProvider>
      <div>
        <BloquePrincipal />

        <Navbar />

        <BloqueA />
        {/* <Header />

      <Widget />
      <PrimerBloque />
      <SegundoBloque />
      <TercerBloque />
      <CuartoBloque />
      <QuintoBloque />
      <SextoBloque />
      <SeptimoBloque />
      <Footer /> */}
      </div>
    </ChakraProvider>
  );
};

export default HomePage;
