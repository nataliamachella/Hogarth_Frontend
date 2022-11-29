import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";

import BloqueD from "../components/BloqueD/BloqueD";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BloquePrincipal />
      <BloqueA />
      <BloqueD />
    </div>
  );
};

export default HomePage;
