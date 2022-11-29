import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";

import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";
import BloqueD from "../components/BloqueD/BloqueD";

const HomePage = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <BloquePrincipal />
        <BloqueA />
        <BloqueD />
        {/*
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default HomePage;
