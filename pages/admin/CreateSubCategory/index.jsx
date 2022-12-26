import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Box,
  Select,
} from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateSubCategory({ categories }) {
  const [name, setName] = useState(null);
  const [urlCategory, setUrlCategory] = useState(null);
  const router = useRouter();

  const createSubCategory = () => {
    axios
      .post("/api/subcategories/create", {
        name: name,
        urlCategory: urlCategory,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push("/admin/Subcategorias");
  };
  return (
    <Box
      minH={"100vh"}
      width="80%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      ml="300"
    >
      <Stack
        spacing={4}
        w={"full"}
        width="100%"
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Create SubCategory
        </Heading>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl id="urlSubCategory" isRequired>
          <FormLabel>Categoria</FormLabel>
          <Select
            placeholder="Select option"
            onChange={(e) => setUrlCategory(e.target.value)}
          >
            {categories
              ? categories.map((category) => (
                  <option key={category.url} value={category.url}>
                    {category.name}
                  </option>
                ))
              : null}
          </Select>
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
            onClick={() => router.push("/admin/Subcategorias")}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
            onClick={createSubCategory}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  const resCategories = await fetch(
    `https://wow-r0wf.onrender.com/api/categories`,
    { withCredentials: true, credentials: "include" }
  );
  const dataCategories = await resCategories.json();

  return { props: { categories: dataCategories } };
}
