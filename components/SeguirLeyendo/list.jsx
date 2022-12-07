import React, { useEffect, useState } from "react";
import { Grid, Text, Box, Heading, Center, IconButton } from "@chakra-ui/react";
import CardItem from "../../commons/SeguirLeyendo/cardItem";
import axios from "axios";
import { FiPlusSquare } from "react-icons/fi";

const List = () => {
  const [notes, setNotes] = useState(null);
  const [maxNotes, setMaxNotes] = useState(6);

  const plusNotes = () => {
    setMaxNotes(maxNotes + 6);
  };

  useEffect(() => {
    axios
      .get(`/api/notes/findForLimit/${maxNotes + 6}`)
      .then((res) => setNotes(res.data));
  }, [maxNotes]);
  return (
    <Box marginTop="80px" width="100vw" backgroundColor=" #f4f4f4">
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
        <Center marginTop="40px" pb="30px">
          {notes ? (
            <Grid templateColumns="repeat(3, 1fr)" gap={6} width="60%">
              {notes.rows.slice(0, maxNotes).map((note) => (
                <CardItem
                  key={note.id}
                  note={note}
                  urlSubcategory={note.subCategory.url}
                  urlCategory={note.subCategory.category.url}
                />
              ))}
              <Box></Box>
              {maxNotes >= 30 ? null : (
                <IconButton icon={<FiPlusSquare />} onClick={plusNotes} />
              )}
            </Grid>
          ) : (
            <Text>Loading</Text>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default List;
