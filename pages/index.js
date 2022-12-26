import React from "react";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import BloqueB from "../components/BloqueB/BloqueB";
import Widget from "../components/Widget/Widget";
import { Box } from "@chakra-ui/react";
import BloqueE from "../components/BloqueE/BloqueE";
import Footer from "../components/Footer/Footer";
import BloqueD from "../components/BloqueD/BloqueD";
import BloqueF from "../components/BloqueF/BloqueF";

const HomePage = ({ typeContent }) => {
  let bloques = [
    <BloqueA />,
    <BloqueB />,
    <BloqueD />,
    <BloqueE />,
    <BloqueF />,
    <Widget />,
  ];
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
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://wow-r0wf.onrender.com/api/typeContent`, {
    withCredentials: true,
    credentials: "include",
  });
  const data = await res.json();
  return { props: { typeContent: data } };
}

export default HomePage;
