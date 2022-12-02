import React, { useState, useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import CardItem from "../../commons/BloqueD/cardItem";

const BloqueD = ({ url }) => {
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    axios.get(`/api/notes/byCategory/${url}`).then((notas) => {
      console.log(notas.data);
    });
  }, [url]);

  return (
    <Box>
      {notas ? (
        <SimpleGrid
          display="flex"
          flexDir="row"
          justifyContent="space-around"
          margin="15px 0"
        >
          {notas.map((nota, i) => {
            return <CardItem nota={nota} key={i} />;
          })}
        </SimpleGrid>
      ) : null}
    </Box>
  );
};

export default BloqueD;
