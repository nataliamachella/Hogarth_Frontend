import { Image, Text, ChakraProvider, Container } from "@chakra-ui/react";

const BloquePrincipal = () => {
  return (
    <ChakraProvider>
      <Container
        objectFit="cover"
        display="flex"
        maxW="100%"
        height={"600px"}
        marginTop="130"
        marginBottom="65"
        backgroundImage="assets/nenearbol.webp"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
        justifyContent="right"
        alignItems="center"
      >
        {/* <Image
            objectFit="cover"
            src="assets/nenearbol.webp"
            display="flex"
            width="1833px"
            height="50vh"
          /> */}
        <Text paddingRight="40px" fontSize="40px" color="white">
          “Apareció mi ex”.
          <br />
          ¿Cómo reaccionar <br />
          cuando alguien del <br />
          pasado vuelve a tu vida?
        </Text>
      </Container>
    </ChakraProvider>
  );
};

export default BloquePrincipal;
