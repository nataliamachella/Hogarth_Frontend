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
import CardItem from "../../commons/BloqueF/cardItem";

const BloqueF = () => {
  const [notas, setNotes] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get("/api/categories").then((category) => {
      setCategory(category.data);
    });
    axios.get("api/notes/byCategory/:url").then((notas) => {
      setNotes(notas.data);
    });
  }, []);

  return (
    <Box>
      {notas ? (
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
            {category ? category.name : null}
          </Text>
          <Box display="flex" flexDirection="column" alignItems="center">
            {notas ? (
              <Card width="80%">
                <CardBody>
                  <Image src={notas[0]?.field_img_primary} borderRadius="lg" />
                  <Stack mt="6" spacing="3" alignItems="center">
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      {notas[0]?.field_title_pre}
                    </Heading>
                    <Text fontSize={{ base: "lg", lg: "xl" }}>
                      {notas[0]?.field_title}
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
              {notas.slice(1, 4).map((nota, i) => (
                <CardItem nota={nota} key={i} />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      ) : null}
    </Box>
  );
};

export default BloqueF;
