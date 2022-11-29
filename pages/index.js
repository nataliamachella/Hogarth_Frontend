import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget";
import { Box } from "@chakra-ui/react";
import BloqueE from "../components/BloqueE/BloqueE";
import BloqueD from "../components/BloqueD/BloqueD";

const HomePage = () => {
  return (
    <Box>
      <BloquePrincipal />
      <BloqueA />
      <BloqueB />
      <BloqueE />
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
