import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Content({ bloque, categories }) {
  const [name, setName] = useState(bloque.name);
  const [urlCategory, setUrlCategory] = useState(bloque.urlCategory);
  const [position, setPosition] = useState(bloque.position);
  const router = useRouter();

  const updateBloque = () => {
    axios
      .put(`/api/typeContent/change/${bloque.id}`, {
        name: name,
        urlCategory: urlCategory,
        position: position,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push("/admin/Contenido");
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
          Content Edit
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={bloque.name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="position" isRequired>
          <FormLabel>Posicion</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={bloque.position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </FormControl>
        <FormControl id="urlSubCategory" isRequired>
          <FormLabel>Categoria</FormLabel>
          <Select
            placeholder="Select option"
            onChange={(e) => setUrlCategory(e.target.value)}
            defaultValue={bloque.urlCategory}
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
            onClick={() => router.push("/admin/Contenido")}
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
            onClick={updateBloque}
          >
            EDITAR
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const { name } = query;
  const res = await fetch(`http://localhost:3001/api/typeContent/${name}`);
  const data = await res.json();
  const resCategories = await fetch(`http://localhost:3001/api/categories`);
  const dataCategories = await resCategories.json();
  return { props: { bloque: data, categories: dataCategories } };
}
