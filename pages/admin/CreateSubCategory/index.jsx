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
  Textarea,
} from "@chakra-ui/react";
import fetch from "isomorphic-fetch";

export default function UserProfileEdit({ categories }) {
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
          <Input _placeholder={{ color: "gray.500" }} type="text" />
        </FormControl>

        <FormControl id="urlSubCategory" isRequired>
          <FormLabel>Categoria</FormLabel>
          <Select placeholder="Select option">
            {categories
              ? categories.map((category) => (
                  <option key={category.url} value={category.id}>
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
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  const resCategories = await fetch(`http://localhost:3001/api/categories`);
  const dataCategories = await resCategories.json();

  return { props: { categories: dataCategories } };
}
