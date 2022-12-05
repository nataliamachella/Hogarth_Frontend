import { Box, UnorderedList } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import ListCategory from "../../../commons/Admin/ListCategory";

export default function Content({ bloques }) {
  const router = useRouter();
  return (
    <Box width="84vw" height="100%" marginLeft="300px">
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <UnorderedList gap={6}>
            {bloques ? (
              bloques.map((bloque, i) => (
                <ListCategory data={bloque} path={router.pathname} key={i} />
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
  const res = await fetch(`http://localhost:3001/api/typeContent`);
  const data = await res.json();
  return { props: { bloques: data } };
}
