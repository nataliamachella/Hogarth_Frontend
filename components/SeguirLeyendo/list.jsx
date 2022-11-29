import React, { useEffect, useState } from "react";
import { Grid, Text } from "@chakra-ui/react";
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
    <Grid templateColumns="repeat(3, 1fr)" gap={6} width="60%">
      {notes ? (
        notes.map((note) => (
          <CardItem
            note={note}
            urlSubcategory={note.subCategory.url}
            urlCategory={note.subCategory.category.url}
          />
        ))
      ) : (
        <Text>Loading</Text>
      )}
    </Grid>
  );
};

export default List;
