import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import { Container, Spacer } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container display="flex" flexDirection="column">
        <BloquePrincipal />
        <BloqueA />
      </Container>
      {/*
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
  );
};

export default HomePage;
