import React from "react";
import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";

const NoteCarrusel = ({ nota, redirect }) => {

  return (
    <Box
      height={"100%"}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${nota.field_img_primary})`}
    >
      <Container size="container.lg" height="600px" position="relative" >
        <Stack
          spacing={4}
          w={"100%"}
          maxW={"100%"}
          position="absolute"
          top="70%"
          transform="translate(-20%, -50%)"
          cursor="pointer"
          onClick={() => {
            redirect(nota.url);
          }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="white"
          >
            {nota.title}
          </Heading>
          <Text fontSize={{ base: "lg", lg: "xl" }} color="white" >
            {nota.field_description}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default NoteCarrusel;
