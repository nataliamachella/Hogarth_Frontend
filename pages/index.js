import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget";
import { Box } from "@chakra-ui/react";
import BloqueE from "../components/BloqueE/BloqueE";
import Footer from "../components/Footer/Footer";
import BloqueD from "../components/BloqueD/BloqueD";

const HomePage = ({ typeContent }) => {
  let bloques = [<BloqueA />, <BloqueB />, <BloqueE />, <Widget />];
  function swapElements(arr, i1, i2) {
    arr[i1] = arr.splice(i2, 1, arr[i1])[0];
  }
  typeContent.map((item, i) => {
    if (item.name === bloques[i].type.name)
      swapElements(bloques, item.position - 1, i);
  });
  return (
    <Box>
      <BloquePrincipal />
      {bloques.map((item, i) => {
        return {
          ...item,
          key: i,
          props: {
            data: typeContent.find((content) => content.name == item.type.name),
          },
        };
      })}

      <Footer />
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/typeContent`);
  const data = await res.json();
  return { props: { typeContent: data } };
}

export default HomePage;
