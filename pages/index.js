import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget"

const HomePage = () => {
  return (
    <Box >
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
    </Box>
  );
};

export default HomePage;
