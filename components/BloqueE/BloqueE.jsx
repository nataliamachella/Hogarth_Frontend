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

const BloqueE = () => {
  const [amores, setAmores] = useState(null);

  useEffect(() => {
    axios.get("/api/notes/byCategory/Amores").then((notas) => {
      console.log(notas.data);
      setAmores(notas.data);
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
      >
        <Text
          fontSize="50px"
          _hover={{
            color: "purple",
          }}
        >
          Amores
        </Text>
        <Box display="flex" flexDirection="column" alignItems="center">
          {amores ? (
            <Card width="80%">
              <CardBody>
                <Image src={amores[0].field_img_primary} borderRadius="lg" />
                <Stack mt="6" spacing="3" alignItems="center">
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {amores[0].field_title_pre}
                  </Heading>
                  <Text fontSize={{ base: "lg", lg: "xl" }}>
                    {amores[0].field_title}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          ) : null}

          <SimpleGrid
            display="flex"
            flexDir="row"
            justifyContent="space-around"
            margin="15px 0 15px 0"
            width="80%"
          >
            <Card width="33%">
              <CardBody>
                {amores ? (
                  <>
                    <Image
                      src={amores[1].field_img_primary}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{amores[1].title}</Heading>
                    </Stack>
                  </>
                ) : null}
              </CardBody>
              <Divider />
            </Card>
            <Card width="33%">
              <CardBody>
                {amores ? (
                  <>
                    <Image
                      src={amores[2].field_img_primary}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{amores[2].title}</Heading>
                    </Stack>
                  </>
                ) : null}
              </CardBody>
              <Divider />
            </Card>
            <Card width="33%">
              <CardBody>
                {amores ? (
                  <>
                    <Image
                      src={amores[3].field_img_primary}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{amores[3].title}</Heading>
                    </Stack>
                  </>
                ) : null}
              </CardBody>
              <Divider />
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default BloqueE;
