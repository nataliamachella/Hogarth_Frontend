import { Box, Grid, Text } from "@chakra-ui/react";
import CardItem from "../../../commons/ListSubcategory/cardItem";

const ListNotes = ({ subcategory }) => {
  return (
    <Box h="170px" w="100%">
      {subcategory ? (
        <Box mr={300} ml={300} mt={40}>
          <Grid templateColumns="repeat( 1fr)" gap={6}>
            {subcategory.notes ? (
              subcategory.notes.map((note, i) => (
                <CardItem
                  note={note}
                  key={i}
                  urlSubcategory={subcategory.url}
                  urlCategory={subcategory.category.url}
                />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { urlSubcategory } = query;
  const res = await fetch(
    `http://localhost:3001/api/subcategories/findByUrl/${urlSubcategory}`
  );
  const data = await res.json();
  return { props: { subcategory: data } };
  return { props: {} };
}

export default ListNotes;
