import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Box, Text, Image, Divider, Heading } from "@chakra-ui/react";
import List from "../../components/SeguirLeyendo/list";

const Post = () => {
  const router = useRouter();
  let url = router.query.url;
  const [note, setNote] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/notes/byURL/${url}`)
      .then((res) => res.data)
      .then((data) => setNote(data));
  }, [router.isReady, url]);
  return (
    <>
      {note ? (
        <>
          <Box mr={300} ml={300}>
            <Heading as="h1" fontSize={48} fontWeight="bold" textAlign="center">
              {note.field_title_pre + note.field_title}
            </Heading>
            <Heading
              as="h2"
              fontSize={21}
              textAlign="center"
              fontWeight="normal"
            >
              {note.field_description}
            </Heading>
            <Divider
              borderColor="#E32B6C"
              borderStyle="solid"
              borderWidth={2}
              width={40}
            />
            <Text fontSize={16} textAlign="center">
              por <b>{note.author}</b>.
            </Text>
            <Text fontSize={15} textAlign="center" color="#969696">
              {note.createdAt}
            </Text>
            <Image
              src={note.field_img_primary}
              alt="Incendios forestales en el Río Paraná"
              boxSize="900px"
            />
            {note.contents.map((itemContent, i) => (
              <div
                key={i}
                className="text-container"
                dangerouslySetInnerHTML={{ __html: itemContent.field_content }}
              />
            ))}
          </Box>
          <Box>
            <List />
          </Box>
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Post;
