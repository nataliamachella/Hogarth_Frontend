import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Grid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import CardItem from "../../commons/SeguirLeyendo/cardItem";
import axios from "axios";

const BloqueD = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios.get("/byCategory/:url").then((note) => setNotes(note.data));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ChakraProvider>
      {notes ? (
        <Grid
          templateColumns="repeat(3, 2fr)"
          gap={6}
          margin="20px 30px 30px 120px"
          w={"70%"}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/*  <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem /> */}
        </Grid>
      ) : (
        <Text>Loading</Text>
      )}
    </ChakraProvider>
  );
};

export default BloqueD;
