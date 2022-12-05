import { Box, Text, Grid } from "@chakra-ui/react";
import CreateButtons from "../../../components/Admin/CreateButtons";
import CardNotes from "../CardNotes";

const Notas = ({ notes }) => {
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
            {notes ? (
              notes.map((note, i) => <CardNotes note={note} key={i} />)
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
