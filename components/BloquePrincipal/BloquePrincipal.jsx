import { Flex, Box, Image, Text, ChakraProvider, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BloquePrincipal = () => {
  //   const [mainNote, setMainNote] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "/api/notes/byURL/Incendios_en_el_Delta_quema_intencional_sequa_y_falta_de_accin"
  //       )
  //       .then((note) => setMainNote(note));
  //   });

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
          “Apareció mi ex”.<br/>
          ¿Cómo reaccionar<br/>
            cuando alguien del<br/>
            pasado vuelve a tu vida?
        </Text>
    </Container>
    </ChakraProvider>
  );
};

export default BloquePrincipal;
