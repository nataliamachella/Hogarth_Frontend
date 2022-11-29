import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

const BloqueA = () => {
  const [actualidad, setActualidad] = useState(null);

  useEffect(() => {
    axios.get("/api/notes/byCategory/Actualidad").then((notas) => {
      setActualidad(notas.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <Container
        marginTop="40px"
        display="flex"
        flexDir="column"
        maxW="67%"
        border="1px"
        borderRadius="lg"
        borderColor=" #f0f0f0"
        height="auto"
      >
        <Text
          fontSize="50px"
          _hover={{
            color: "purple",
          }}
        >
          Actualidad
        </Text>
        <Box display="flex" position="relative" flexDirection="row">
          <picture position="absolute" display="flex">
            {actualidad ? (
              <Image borderRadius="lg" src={actualidad[0].field_img_primary} />
            ) : null}
          </picture>
          <Box
            width="100%"
            height="100%"
            position="absolute"
            z-index="1000"
            display="flex"
            textAlign="center"
            alignItems="center"
            transform="translate(-35%, -10%)"
          >
            <Box
              display="flex"
              width="100%"
              flexDir="row"
              justifyContent="flex-end"
              height="100%"
            >
              <Box
                display="flex"
                flexDir="column"
                justifyContent="end"
                width="60%"
                paddingRight="10%"
                textAlign="left"
              >
                {actualidad ? (
                  <>
                    <Text fontSize="5xl" color="white" marginTop="15%" as="b">
                      {actualidad[0].field_title_pre}
                    </Text>
                    <Text float="right" fontSize="5xl" color="white">
                      {actualidad[0].field_title}
                    </Text>
                  </>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
        <SimpleGrid
          display="flex"
          flexDir="row"
          justifyContent="space-around"
          margin="15px 0 15px 0"
        >
          <Card maxW="sm">
            <CardBody>
              {actualidad ? (
                <>
                  <Image
                    src={actualidad[1].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{actualidad[1].title}</Heading>
                    <Text>{actualidad[1].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              {actualidad ? (
                <>
                  <Image
                    src={actualidad[2].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{actualidad[2].title}</Heading>
                    <Text>{actualidad[2].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              {actualidad ? (
                <>
                  <Image
                    src={actualidad[3].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{actualidad[3].title}</Heading>
                    <Text>{actualidad[3].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default BloqueA;
