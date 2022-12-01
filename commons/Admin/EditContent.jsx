import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const EditContent = ({ content }) => {
  return (
    <>
      <FormControl id="position" isRequired>
        <FormLabel>{content.position}</FormLabel>
        <FormLabel>Titulo de Content</FormLabel>
        <Input
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={content.field_content_title || "no title"}
        />
        <FormLabel>Content</FormLabel>
        <Textarea
          _placeholder={{ color: "gray.500" }}
          type="text"
          defaultValue={content.field_content}
        />
      </FormControl>
    </>
  );
};

export default EditContent;
