import React, { useEffect, useState } from "react";
import { Box, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import CreateButtons from "../../components/Admin/CreateButtons";
import ListCategory from "../../commons/Admin/Categories/ListCategory";

const ContentAdmin = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((categories) => setCategories(categories.data));
  }, []);

  return (
    <Box width="100%" height="100%" marginLeft="300px">
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
          <UnorderedList gap={6}>
            {categories ? (
              categories.map((category, i) => (
                <ListCategory category={category} key={i} />
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
