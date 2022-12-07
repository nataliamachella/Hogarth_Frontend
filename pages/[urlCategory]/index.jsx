import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import BloqueA from "../../components/BloqueA/BloqueA";
import BloqueE from "../../components/BloqueE/BloqueE";
import BloqueB from "../../components/BloqueB/BloqueB";
import BloqueD from "../../components/BloqueD/BloqueD";
import BloqueF from "../../components/BloqueF/BloqueF";
import fetch from "isomorphic-fetch";

const UltimasNoticias = ({ data, category, url }) => {
  let bloques = [
    <BloqueA />,
    <BloqueB />,
    <BloqueD />,
    <BloqueE />,
    <BloqueF />,
  ];
  let filterBlocks = [];
  data.map((item) => {
    filterBlocks.push(bloques.find((block) => block.type.name == item.name));
  });
  return (
    <Box>
      {category ? (
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            height="220"
            width="100vw"
            flexDirection="row"
            marginTop="118px"
            backgroundImage={category.image}
            backgroundSize="cover"
            justifyContent="center"
            alignItems="center"
          >
            <Stack textAlign="center">
              <Heading fontSize="5xl" textTransform="uppercase">
                {category.name}
              </Heading>
              <Text fontSize="md">{category.description}</Text>
            </Stack>
          </Box>
          <Box>
            {filterBlocks.map((item, i) => {
              return {
                ...item,
                key: i,
                props: {
                  data: data.find((content) => content.name == item.type.name),
                },
              };
            })}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { urlCategory } = query;
  const res = await fetch(
    `http://localhost:3001/api/typeContentBC/findByCategory/${urlCategory}`
  );
  const data = await res.json();
  const resCategory = await fetch(
    `http://localhost:3001/api/categories/${urlCategory}`
  );
  const dataCategory = await resCategory.json();
  return {
    props: { data: data, category: dataCategory, url: urlCategory },
  };
}

export default UltimasNoticias;
