import React, { useEffect, useState } from "react";
import { Box, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import CreateButtons from "../../components/Admin/CreateButtons";
import ListSubCategory from "../../commons/Admin/SubCategory.jsx/ListSubCategory";

const ContentAdmin = () => {
  const [subCategories, setSubCategories] = useState(null);

  useEffect(() => {
    axios
      .get("/api/subcategories")
      .then((subcategories) => setSubCategories(subcategories.data));
  }, []);

  return (
    <Box width="100%" height="100%" marginLeft="300px">
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>SUBCATEGORIES</Text>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <CreateButtons />
      </Box>
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <UnorderedList gap={6}>
            {subCategories ? (
              subCategories.map((subCategory, i) => (
                <ListSubCategory subCategory={subCategory} key={i} />
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
