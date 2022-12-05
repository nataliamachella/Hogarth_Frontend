import { Container, Image, Text, SimpleGrid, Box } from "@chakra-ui/react";
import CardItem from "../../commons/BloqueA/cardItem";

const BloqueA = ({ data }) => {
  const { notesArr } = data;
  return (
    <Box>
      {notesArr ? (
        <Box>
          <Container
            marginTop="40px"
            display="flex"
            flexDir="column"
            maxW="67%"
            border="1px"
            borderRadius="lg"
            borderColor=" #f0f0f0"
            height="auto"
            position="relative"
          >
            <Text
              fontSize="50px"
              _hover={{
                color: "purple",
              }}
            >
              {data.category ? data.category.name : null}
            </Text>
            <Box display="flex" flexDir="row">
              <Box width="100%" height="50%" maxH="50%">
                <picture position="absolute" display="flex">
                  <Image
                    borderRadius="lg"
                    src={notesArr[0].field_img_primary}
                  />
                </picture>
              </Box>
              <Box
                maxH="50%"
                width="90%"
                position="absolute"
                z-index="1000"
                display="flex"
                textAlign="center"
                bottom="50%"
              >
                <Box position="relative" textAlign="left" paddingLeft="20px">
                  <Text fontSize="5xl" color="white" as="b">
                    {notesArr[0].field_title_pre}
                  </Text>
                  <Text fontSize="4xl" color="white">
                    {notesArr[0].field_title}
                  </Text>
                </Box>
              </Box>
            </Box>
            <SimpleGrid
              display="flex"
              flexDir="row"
              justifyContent="space-around"
              margin="15px 0 15px 0"
            >
              {notesArr.slice(1, 4).map((nota, i) => (
                <CardItem nota={nota} key={i} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
};

export default BloqueA;
