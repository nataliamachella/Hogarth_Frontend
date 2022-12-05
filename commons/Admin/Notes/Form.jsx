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
import { useRouter } from "next/router";
import { useState } from "react";
import EditContent from "../../../commons/Admin/Editor/EditContent";
import axios from "axios";

const Form = ({ note, subCategories, subjects }) => {
  const [title, setTitle] = useState(note ? note.title : null);
  const [field_title, setField_title] = useState(
    note ? note.field_title : null
  );
  const [field_title_pre, setField_title_pre] = useState(
    note ? note.field_title_pre : null
  );
  const [description, setDescription] = useState(
    note ? note.description : null
  );
  const [author, setAuthor] = useState(note ? note.author : null);
  const [image, setImage] = useState(note ? note.image : null);
  const [subcategory, setSubcategory] = useState(
    note ? note.subcategory : null
  );
  const [subject, setSubject] = useState(note ? note.subject : null);
  const [field_content, setField_content] = useState(
    note ? note.field_content : null
  );
  const router = useRouter();

  const createOrUpdateNote = () => {
    if (!note) {
      console.log("crear");
      axios
        .post("/api/notes/create", {
          title: title,
          field_title: field_title,
          field_title_pre: field_title_pre,
          field_description: description,
          author: author,
          field_img_primary: image,
          urlSubCategory: subcategory,
          idSubject: subject,
          field_content: field_content,
        })
        .then(() => console.log("success"))
        .catch((err) => console.error(err));
    } else {
      console.log("Actualizar");
      axios
        .put(`/api/notes/change/${note.id}`, {
          title: title,
          field_title: field_title,
          field_title_pre: field_title_pre,
          field_description: description,
          author: author,
          field_img_primary: image,
          urlSubCategory: subcategory,
          idSubject: subject,
          field_content: field_content,
        })
        .then(() => console.log("success"))
        .catch((err) => console.error(err));
    }
    return router.push("/admin");
  };
  return (
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
        {note ? "Note Edit" : "Create Note"}
      </Heading>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.title : null}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl id="field_title" isRequired>
        <FormLabel>Field_title</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.field_title : null}
          onChange={(e) => setField_title(e.target.value)}
        />
      </FormControl>
      <FormControl id="field_title_pre" isRequired>
        <FormLabel>Field_title_pre</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.field_title_pre : null}
          onChange={(e) => setField_title_pre(e.target.value)}
        />
      </FormControl>
      <FormControl id="field_description" isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.field_description : null}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl id="author" isRequired>
        <FormLabel>Author</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.author : null}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormControl>
      <FormControl id="field_img_primary" isRequired>
        <FormLabel>Imagen (url)</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={note ? note.field_img_primary : null}
          onChange={(e) => setImage(e.target.value)}
        />
      </FormControl>
      <FormControl id="urlSubCategory" isRequired>
        <FormLabel>Subcategoria</FormLabel>
        <Select
          placeholder="Select option"
          defaultValue={note ? note.subCategory.url : null}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          {subCategories
            ? subCategories.map((subCategory) => (
                <option key={subCategory.url} value={subCategory.url}>
                  {subCategory.name}
                </option>
              ))
            : null}
        </Select>
      </FormControl>
      <FormControl id="subject" isRequired>
        <FormLabel>Subject</FormLabel>
        <Select
          placeholder="Select option"
          onChange={(e) => setSubject(e.target.value)}
          defaultValue={note ? note.subject[0].id : null}
        >
          {subjects
            ? subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))
            : null}
        </Select>
      </FormControl>
      <FormControl id="field_content" isRequired>
        <FormLabel>Contents</FormLabel>
        <Box border="1px solid grey" borderRadius="5px">
          <EditContent
            setField_content={setField_content}
            content={note ? note.field_content : ""}
          />
        </Box>
      </FormControl>
      <Stack spacing={6} direction={["column", "row"]}>
        <Button
          bg={"red.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "red.500",
          }}
          onClick={() => router.push("/admin")}
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
          onClick={createOrUpdateNote}
        >
          {note ? "Actualizar" : "Crear"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
