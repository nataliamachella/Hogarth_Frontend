import { Box, Text, UnorderedList } from "@chakra-ui/react";
import CreateButtons from "../../components/Admin/CreateButtons";
import ListCategory from "../../commons/Admin/ListCategory";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";

const ContentAdmin = ({ subCategories }) => {
  const router = useRouter();
  return (
    <Box width="84vw" height="100%" marginLeft="300px">
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
                <ListCategory
                  data={subCategory}
                  path={router.pathname}
                  key={i}
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
};

export default ContentAdmin;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/api/subcategories");
  const data = await res.json();
  return {
    props: {
      subCategories: data,
    },
  };
}
