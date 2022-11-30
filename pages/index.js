import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget";
import { Box } from "@chakra-ui/react";
import BloqueE from "../components/BloqueE/BloqueE";

const HomePage = ({ typeContent }) => {
  const bloques = [<BloqueA />, <BloqueB />, <BloqueE />, <Widget />];

  return (
    <Box>
      <BloquePrincipal />
      {typeContent.map((typeContent, i) => {
        return {
          ...bloques[typeContent.position - 1],
          key: i,
          props: {
            url: typeContent.urlCategory ? typeContent.urlCategory : null,
          },
        };
      })}
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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/typeContent`);
  const data = await res.json();
  return { props: { typeContent: data } };
}

export default HomePage;
