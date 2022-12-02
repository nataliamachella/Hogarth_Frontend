import React, { useEffect, useState } from "react";
import { Grid, Text, Box, Heading, Center } from "@chakra-ui/react";
import CardItem from "../../commons/SeguirLeyendo/cardItem";
import axios from "axios";

const List = ({ notas }) => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    axios.get("/api/notes").then((res) => setNotes(res.data));
  }, []);

  return (
    <Box marginTop="80px" width="100vw" backgroundColor=" #fff7f9">
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h3"
          fontSize="26px"
          fontWeight="normal"
          textAlign="inherit"
          paddingTop="50px"
        >
          SEGUIR LEYENDO
        </Heading>
        <Center marginTop="40px">
          <Grid templateColumns="repeat(3, 1fr)" gap={6} width="60%">
            {notes ? (
              notes.map((note) => (
                <CardItem
                  key={note.id}
                  note={note}
                  urlSubcategory={note.subCategory.url}
                  urlCategory={note.subCategory.category.url}
                />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default List;
