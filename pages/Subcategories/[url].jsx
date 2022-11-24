import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Divider,
  Heading,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";
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
    <ChakraProvider>
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
            <Center>
              <Divider
                borderColor="#E32B6C"
                borderStyle="solid"
                borderWidth="2px"
                width="40px"
              />
            </Center>
            <Text fontSize={16} textAlign="center">
              por <b>{note.author}</b>.
            </Text>
            <Text fontSize={15} textAlign="center" color="#969696">
              {note.createdAt}
            </Text>
            <Center>
              <Image
                src={note.field_img_primary}
                alt="Incendios forestales en el Río Paraná"
                boxSize="900px"
              />
            </Center>
            {note.contents.map((itemContent, i) => (
              <Center>
                <div
                  key={i}
                  className="text-container"
                  dangerouslySetInnerHTML={{
                    __html: itemContent.field_content,
                  }}
                />
              </Center>
            ))}
          </Box>
          <Box mt="40px" mb="113px"></Box>
          <Box>
            <Box mr={300} ml={300} pt="30px">
              <Heading
                as="h3"
                fontSize="26px"
                fontWeight="normal"
                textAlign="inherit"
              >
                SEGUIR LEYENDO
              </Heading>
              <Center>
                <List />
              </Center>
            </Box>
          </Box>
        </>
      ) : (
        <p>loading</p>
      )}
    </ChakraProvider>
  );
};

export default Post;
