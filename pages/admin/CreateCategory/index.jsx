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
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateCategory() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const createCategory = () => {
    axios
      .post("/api/categories/create", {
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
          Create Category
        </Heading>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl id="image" isRequired>
          <FormLabel>Image</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
            onClick={() => router.push("/admin/Categorias")}
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
            type="submit"
            onClick={createCategory}
          >
            CREAR
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
