import { Box, Text, Image, Divider, Heading, Center } from "@chakra-ui/react";
import List from "../../components/SeguirLeyendo/list";
import fetch from "isomorphic-fetch";

const Post = ({ note }) => {
  return (
    <Box>
      {note ? (
        <Box>
          <Box h="170px" w="100%"></Box>
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
        </Box>
      ) : (
        <p>loading</p>
      )}
    </Box>
  );
};

Post.getInitialProps = async ({ query }) => {
  const { url } = query;
  const res = await fetch(`http://localhost:3001/api/notes/byURL/${url}`);
  const data = await res.json();
  return { note: data };
};

export default Post;
