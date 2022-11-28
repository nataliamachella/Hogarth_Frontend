import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget"

const HomePage = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <BloquePrincipal />
        <BloqueA />
        <BloqueB />
        <Widget />
        {/*
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
