import React, { useEffect, useState } from "react";
import { Grid, GridItem, Box, Flex, Image, Text } from "@chakra-ui/react";
import CardItem from "../../commons/SeguirLeyendo/cardItem";
import axios from "axios";

const List = () => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/notes`)
      .then((res) => res.data)
      .then((data) => setNotes(data));
  }, []);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {notes ? (
        notes.map((note) => <CardItem note={note} />)
      ) : (
        <Text>Loading</Text>
      )}
    </Grid>
  );
};

export default List;
