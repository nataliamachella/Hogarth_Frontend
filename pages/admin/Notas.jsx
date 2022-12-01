import React, { useEffect, useState } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import axios from "axios";
import CreateButtons from "../../components/Admin/CreateButtons";
import CardNotes from "../../commons/Admin/CardNotes";

const Notas = () => {
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    axios.get("/api/notes").then((notes) => setNotas(notes.data));
  }, []);

  return (
    <Box width="99%" height="100%" ml="300px">
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>NOTAS</Text>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <CreateButtons />
      </Box>
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <Grid templateColumns="repeat( 1fr)" gap={6}>
            {notas ? (
              notas.map((note, i) => <CardNotes note={note} key={i} />)
            ) : (
              <Text>Loading</Text>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Notas;
