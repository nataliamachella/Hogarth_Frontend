import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import CreateButtons from "../../components/Admin/CreateButtons";

const ContentAdmin = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get("/api/categories").then((categories) => setCategories(categories.data));
  });

  return (
    <Box width="84vw" height="100%" marginLeft="300px">
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>CATEGORIES</Text>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <CreateButtons />
      </Box>
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <UnorderedList templateColumns="repeat( 1fr)" gap={6}>
            {categories ? (
              categories.map((category, i) => (
                <Box display="flex" flexDirection="row" minW="100vh">           
                    <ListItem width="40%" margin="15px 0 15px 0">{category.name}</ListItem>
                  <Box marginLeft="40px" display="flex" alignItems="center">
                    <Link href={`/admin/EditCategory/${category.url}`}>
                      <Button colorScheme="blue">EDITAR</Button>
                    </Link>
                  </Box>
                </Box>
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentAdmin;
