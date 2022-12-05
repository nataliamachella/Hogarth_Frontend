import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
function CKeditor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}

export default function index({ content, setField_content }) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  content ? content : (content = "");
  return (
    <Box maxW="1200px" margin="5rem auto">
      <Box border="1px solid gery" borderRaduis="5px">
        <CKeditor
          name="description"
          onChange={(data) => {
            setField_content(data);
          }}
          editorLoaded={editorLoaded}
          value={content}
        />
      </Box>
    </Box>
  );
}
