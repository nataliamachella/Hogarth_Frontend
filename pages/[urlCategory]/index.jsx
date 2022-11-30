import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import BloqueA from "../../components/BloqueA/BloqueA";
import BloqueE from "../../components/BloqueE/BloqueE";
import MasNotas from "../../components/SeguirLeyendo/list"
import fetch from "isomorphic-fetch";

const UltimasNoticias = ( {categoryNotes, category } ) => {
  console.log(categoryNotes); 
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        height="220"
        width="100vw"
        flexDirection="row"
        marginTop="125px"
        backgroundImage={category.image}
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
      >
        <Stack textAlign="center">
          <Heading fontSize="5xl" textTransform="uppercase">{category.name}</Heading>
          <Text fontSize="md">
            {category.description}
          </Text>
        </Stack>
      </Box>
      <Box width="70%">
        <BloqueA/>
        <BloqueE/>
        <MasNotas notas={categoryNotes}/>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { urlCategory } = query;
  const res = await fetch(`http://localhost:3001/api/notes/byCategory/${urlCategory}`)
  const data = await res.json();
  const resCategory = await fetch(`http://localhost:3001/api/categories/${urlCategory}`)
  const dataCategory = await resCategory.json();
  return { props: { categoryNotes: data, category: dataCategory } };
}

export default UltimasNoticias;
