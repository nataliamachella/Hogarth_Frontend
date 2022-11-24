import React from "react";
import {
  ChakraProvider,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Link,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

const BloqueA = () => {
  return (
    <ChakraProvider>
      <Container
        display="flex"
        flexDir="column"
        maxW="fit-content"
        border="1px"
        borderRadius="lg"
        borderColor=" #f0f0f0"
      >
        <Link>
          <Text
            fontSize="50px"
            _hover={{
              color: "purple",
            }}
          >
            Actualidad
          </Text>
        </Link>
        <Image borderRadius="lg" src="/assets/oscar.webp" />
        <SimpleGrid
          display="flex"
          flexDir="row"
          justifyContent="space-around"
          marginTop="15px"
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="assets/oscar.webp"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">TITULO</Heading>
                <Text>
                  "Michael J. Fox es el máximo ejemplo de cómo luchar y cómo
                  vivir. Y hoy es tan querido por su activismo como por su
                  actuación […] Nunca pidió el papel de paciente de párkinson o
                  defensor de la enfermedad. Pero no se equivoquen, es su mejor
                  interpretación".
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="/assets/oscar.webp"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">TITULO</Heading>
                <Text>
                  "Michael J. Fox es el máximo ejemplo de cómo luchar y cómo
                  vivir. Y hoy es tan querido por su activismo como por su
                  actuación […] Nunca pidió el papel de paciente de párkinson o
                  defensor de la enfermedad. Pero no se equivoquen, es su mejor
                  interpretación".
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default BloqueA;
