import { Box, Grid, Heading, Stack, Text, Textarea } from "@chakra-ui/react";
import BloqueE from "../../components/BloqueE/BloqueE";

const UltimasNoticias = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        height="180"
        width="100vw"
        flexDirection="row"
        marginTop="125px"
        backgroundImage="https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/actualidad.png.webp?itok=T9S2RdC7"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
      >
        <Stack textAlign="center">
          <Heading fontSize="5xl">ACTUALIDAD</Heading>
          <Text fontSize="md">
            Noticias de actualidad y un squad de especialistas para abrir el
            diálogo sobre todos esos temas que te interesan.
          </Text>
        </Stack>
      </Box>
      <Box width="70%">
        <BloqueE/>
      </Box>
    </Box>
  );
};

export default UltimasNoticias;
