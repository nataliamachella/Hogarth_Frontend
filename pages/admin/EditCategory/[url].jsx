import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";

export default function EditCategory({ category }) {
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const [image, setImage] = useState(category.image);
  const router = useRouter();

  const updateCategory = () => {
    axios
      .put(`/api/categories/change/${category.id}`, {
        name: name,
        description: description,
        image: image,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push("/admin/Categorias");
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
          Category Edit
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={category.name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={category.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl id="image" isRequired>
          <FormLabel>Image</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={category.image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Link href={"/admin/Categorias"}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              CANCELAR
            </Button>
          </Link>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
            onClick={updateCategory}
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
    `https://wow-r0wf.onrender.com/api/categories/${url}`,
    { withCredentials: true, credentials: "include" }
  );
  const data = await res.json();

  return { props: { category: data } };
}
