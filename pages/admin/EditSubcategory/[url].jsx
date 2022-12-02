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

export default function UpdateSubCategory({ subcategory, categories }) {
  const [name, setName] = useState(subcategory.name);
  const [urlCategory, setUrlCategory] = useState(
    subcategory.category ? subcategory.category.url : null
  );
  const router = useRouter();

  const updateSubCategory = () => {
    axios
      .put(`/api/subcategories/change/${subcategory.id}`, {
        name: name,
        urlCategory: urlCategory,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push("/admin/Subcategorias");
  };
  return (
    <Box
      marginLeft="300px"
      minH={"100vh"}
      width="80%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
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
          Subcategory Edit
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={subcategory.name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="urlSubCategory" isRequired>
          <FormLabel>Categoria</FormLabel>
          <Select
            placeholder="Select option"
            onChange={(e) => setUrlCategory(e.target.value)}
            defaultValue={subcategory.category.url}
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
            CANCELAR
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={updateSubCategory}
          >
            EDITAR
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const { url } = query;
  const res = await fetch(
    `http://localhost:3001/api/subcategories/findByUrl/${url}`
  );
  const data = await res.json();

  const resCategories = await fetch(`http://localhost:3001/api/categories`);
  const dataCategories = await resCategories.json();

  return { props: { subcategory: data, categories: dataCategories } };
}
