import React, { useEffect, useState } from "react";
import {
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
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    axios.get("/api/notes/byCategory/Actualidad").then((notas) => {
      setNotas(notas.data);
    });
  }, []);

  return (
    <Box>
      <Container
        marginTop="40px"
        display="flex"
        flexDir="column"
        maxW="67%"
        border="1px"
        borderRadius="lg"
        borderColor=" #f0f0f0"
        height="auto"
        position="relative"
      >
        <Text
          fontSize="50px"
          _hover={{
            color: "purple",
          }}
        >
          Actualidad
        </Text>
        <Box display="flex" flexDir="row">
          <Box width="100%" height="50%" maxH="50%">
            <picture position="absolute" display="flex">
              {notas ? (
                <Image borderRadius="lg" src={notas[0].field_img_primary} />
              ) : null}
            </picture>
          </Box>
          <Box
            maxH="50%"
            width="90%"
            position="absolute"
            z-index="1000"
            display="flex"
            textAlign="center"
            bottom="50%"
          >
            {notas ? (
              <Text position="relative" textAlign="left" paddingLeft="20px">
                <Text fontSize="5xl" color="white" as="b">
                  {notas[0].field_title_pre}
                </Text> 
                <Text fontSize="4xl" color="white">
                  {notas[0].field_title}
                </Text>
              </Text>
            ) : null}
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
              {notas ? (
                <>
                  <Image
                    src={notas[1].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{notas[1].title}</Heading>
                    <Text>{notas[1].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              {notas ? (
                <>
                  <Image
                    src={notas[2].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{notas[2].title}</Heading>
                    <Text>{notas[2].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              {notas ? (
                <>
                  <Image
                    src={notas[3].field_img_primary}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{notas[3].title}</Heading>
                    <Text>{notas[3].field_description}</Text>
                  </Stack>
                </>
              ) : null}
            </CardBody>
            <Divider />
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BloqueA;
