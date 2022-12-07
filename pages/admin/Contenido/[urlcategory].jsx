import {
  Box,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
} from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import ListContent from "../../../commons/Admin/ListContentCat";
import { FiPlusCircle } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/router";

export default function Content({ bloques, category }) {
  const router = useRouter();
  const blockNames = [
    "BloqueA",
    "BloqueB",
    "BloqueC",
    "BloqueD",
    "BloqueE",
    "BloqueF",
  ];
  const addBlock = (name) => {
    axios.post("/api/typeContentBC/create", {
      name: name,
      position: bloques.length + 1,
      urlCategory: category.url,
    });
    return router.push(`/admin/Contenido/${category.url}`);
  };
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
                  category={category}
                  max={bloques.length}
                />
              ))
            ) : (
              <Text>Loading</Text>
            )}
            <Center pt={100}>
              <Menu>
                <MenuButton>
                  <FiPlusCircle />
                </MenuButton>
                <MenuList>
                  {blockNames.map((name, i) => (
                    <MenuItem onClick={() => addBlock(name)} key={i}>
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Center>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const { urlcategory } = query;
  const res = await fetch(
    `http://localhost:3001/api/typeContentBC/findByCategoryForAdmin/${urlcategory}`
  );
  const data = await res.json();
  const resCategory = await fetch(
    `http://localhost:3001/api/categories/${urlcategory}`
  );
  const dataCategory = await resCategory.json();
  return { props: { bloques: data, category: dataCategory } };
}
