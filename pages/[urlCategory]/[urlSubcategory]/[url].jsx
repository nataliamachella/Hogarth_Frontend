import { Box, Text, Image, Divider, Heading, Center } from "@chakra-ui/react";
import MasNotas from "../../../components/SeguirLeyendo/list";
import fetch from "isomorphic-fetch";

const Post = ({ note }) => {
  return (
    <Box>
      {note ? (
        <Box>
          <Box h="170px" w="100%"></Box>
          <Box
            mr={300}
            ml={300}
            display="flex"
            flexDir="column"
           
          >
            <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Heading width="80%" as="h1" fontSize={48} fontWeight="bold" textAlign="center">
              {note.field_title_pre + note.field_title}
            </Heading>
            <Heading
              alignContent="center"
              width="70%"
              marginTop="40px"
              as="h2"
              fontSize={21}
              textAlign="center"
              fontWeight="normal"
            >
              {note.field_description}
            </Heading>
            </Box>
            <Center>
              <Divider
                marginTop="20px"
                borderColor="#E32B6C"
                borderStyle="solid"
                borderWidth="2px"
                width="40px"
              />
            </Center>
            <Text fontSize={16} textAlign="center" marginTop="20px">
              por <b>{note.author}</b>.
            </Text>
            <Text fontSize={15} textAlign="center" color="#969696">
              {note.createdAt}
            </Text>
            <Center marginTop="40px">
              <Image
                src={note.field_img_primary}
                alt="Incendios forestales en el Río Paraná"
                width="100%"
              />
            </Center>
            {note.contents.map((itemContent, i) => (
              <Center
                display="flex"
                flexDir="column"
                width="60%"
                marginTop="40px"
              >
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
          <MasNotas />
        </Box>
      ) : (
        <p>loading</p>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { url } = query;
  const res = await fetch(`http://localhost:3001/api/notes/byURL/${url}`);
  const data = await res.json();
  return { props: { note: data } };
}

export default Post;
