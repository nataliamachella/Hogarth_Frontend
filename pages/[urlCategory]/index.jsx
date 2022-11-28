import { Box, Grid, Text } from "@chakra-ui/react";
import BloqueA from "../../components/BloqueA/BloqueA";

const UltimasNoticias = () => {
  return (
    <Box h="170px" w="100%">
      <Box mr={300} ml={300} mt={40}>
        <Grid templateColumns="repeat( 1fr)" gap={6}>
          <BloqueA />
        </Grid>
      </Box>
    </Box>
  );
};

export default UltimasNoticias;
