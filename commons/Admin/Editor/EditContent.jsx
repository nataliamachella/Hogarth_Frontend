import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import { Box, Button } from "@chakra-ui/react";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Box
      pb="5px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid grey"
      borderBottomRadius="5px"
    >
      <Box>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}
        >
          <FaBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
          <FaUnderline />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft />
        </Button>
      </Box>
      <Box>
        <Button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </Button>
        <Button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </Button>
      </Box>
    </Box>
  );
};

const EditContent = ({ content }) => {
  let cont;
  content ? (cont = content.field_content) : (cont = null);
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: cont,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
    },
  });

  return (
    <Box maxW="1200px" margin="5rem auto">
      <Box border="1px solid grey" borderRadius="5px">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default EditContent;
