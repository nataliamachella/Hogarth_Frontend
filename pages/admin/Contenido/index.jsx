import { Box, UnorderedList } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import ListContent from "../../../commons/Admin/ListContent";

export default function Content({ bloques, categories }) {
  return (
    <Box width="84vw" height="100%" marginLeft="300px">
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <UnorderedList gap={6}>
            {bloques ? (
              bloques.map((bloque, i) => (
                <ListContent
                  data={bloque}
                  key={i}
                  categories={categories}
                  max={bloques.length}
                />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://wow-r0wf.onrender.com/api/typeContent`, {
    withCredentials: true,
    credentials: "include",
  });
  const data = await res.json();
  const resCategories = await fetch(
    `https://wow-r0wf.onrender.com/api/categories`,
    { withCredentials: true, credentials: "include" }
  );
  const dataCategories = await resCategories.json();
  return { props: { bloques: data, categories: dataCategories } };
}
