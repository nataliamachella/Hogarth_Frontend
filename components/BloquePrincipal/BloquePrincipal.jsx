import { Image, Text, ChakraProvider, Container } from "@chakra-ui/react";

const BloquePrincipal = () => {
  return (
    <ChakraProvider>
      <Container maxW="100%" maxH="50%" marginTop="90" marginBottom="65">
        <Image
          objectFit="cover"
          src="assets/nenearbol.webp"
          display="flex"
          width="1833px"
          height="50vh"
        />
        <Text
          fontSize="50px"
          color="white"
          marginTop="-350px"
          textAlign="left"
          paddingLeft="1100px"
        >
          “Apareció mi ex”.
          <br />
          ¿Cómo reaccionar
          <br />
          cuando alguien del
          <br />
          pasado vuelve a tu vida?
        </Text>
      </Container>
    </ChakraProvider>
  );
};

export default BloquePrincipal;
