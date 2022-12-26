import { Box, Grid, Text } from "@chakra-ui/react";
import CardItem from "../commons/ListSubcategory/cardItem";
import fetch from "isomorphic-fetch";

const SearchNotes = ({ input }) => {
  //input es un array de notas
  return (
    <Box h="170px" w="100%">
      <Box mr={300} ml={300} mt={40}>
        <Grid templateColumns="repeat( 1fr)" gap={6}>
          {input ? (
            input.map((note, i) => (
              <CardItem
                note={note}
                key={i}
                urlSubcategory={note.subCategory.url}
                urlCategory={note.subCategory.category.url}
              />
            ))
          ) : (
            <Text>Loading</Text>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { input } = query;
  const res = await fetch(
    `https://wow-r0wf.onrender.com/api/notes/search?queryString=${input}`,
    { withCredentials: true, credentials: "include" }
  );
  const data = await res.json();
  return { props: { input: data } };
}

export default SearchNotes;
