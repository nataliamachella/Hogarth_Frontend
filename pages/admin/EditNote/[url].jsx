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
import EditContent from "../../../commons/Admin/Editor/EditContent";
import { FiPlus } from "react-icons/fi";
//import { SmallCloseIcon } from "@chakra-ui/icons";

function ordenarContents(note1, note2) {
  if (note1.position > note2.position) return 1;
  if (note1.position < note2.position) return -1;
  return 0;
}

export default function UserProfileEdit({ note, subCategories }) {
  return (
    <Box
      minH={"100vh"}
      width="80%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      ml="300px"
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
          Note Edit
        </Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.title}
          />
        </FormControl>
        <FormControl id="field_title" isRequired>
          <FormLabel>Field_title</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.field_title}
          />
        </FormControl>
        <FormControl id="field_title_pre" isRequired>
          <FormLabel>Field_title_pre</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.field_title_pre}
          />
        </FormControl>
        <FormControl id="field_description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.field_description}
          />
        </FormControl>
        <FormControl id="author" isRequired>
          <FormLabel>Author</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.author}
          />
        </FormControl>
        <FormControl id="field_img_primary" isRequired>
          <FormLabel>Imagen (url)</FormLabel>
          <Input
            _placeholder={{ color: "gray.500" }}
            type="text"
            defaultValue={note.field_img_primary}
          />
        </FormControl>
        <FormControl id="urlSubCategory" isRequired>
          <FormLabel>Subcategoria</FormLabel>
          <Select
            placeholder="Select option"
            defaultValue={note.subCategory.id}
          >
            {subCategories
              ? subCategories.map((subCategory) => (
                  <option key={subCategory.url} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ))
              : null}
          </Select>
        </FormControl>
        <FormControl id="field_content" isRequired>
          <FormLabel>Contents</FormLabel>
        </FormControl>
        <Box border="1px solid grey" borderRadius="5px">
          {note
            ? note.contents
                .sort(ordenarContents)
                .map((content, i) => <EditContent content={content} key={i} />)
            : null}
          <Button border="1px solid grey" borderRadius="5px" mb="10px">
            <FiPlus />
          </Button>
        </Box>
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

export async function getServerSideProps({ query }) {
  const { url } = query;
  const res = await fetch(`http://localhost:3001/api/notes/byURL/${url}`);
  const data = await res.json();

  const resSubCategories = await fetch(
    `http://localhost:3001/api/subcategories`
  );
  const dataSubCategories = await resSubCategories.json();

  return { props: { note: data, subCategories: dataSubCategories } };
}
