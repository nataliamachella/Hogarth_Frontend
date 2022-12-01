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
  
  export default function UserProfileEdit({ category }) {
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
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={category.description}
            />
          </FormControl>
          <FormControl id="image" isRequired>
            <FormLabel>Image</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={category.image}
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
    const res = await fetch(`http://localhost:3001/api/categories/${url}`);
    const data = await res.json();
  
    return { props: { category: data } };
  }
  