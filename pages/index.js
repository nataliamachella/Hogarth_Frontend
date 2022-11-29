import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";

import BloqueD from "../components/BloqueD/BloqueD";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container display="flex" flexDirection="column">
        <BloquePrincipal />
        <BloqueA />
        {/*  <BloqueD /> */}
      </Container>
    </div>
  );
};

export default HomePage;
