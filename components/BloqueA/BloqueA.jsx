import { Container, Image, Text, SimpleGrid, Box, Img } from "@chakra-ui/react";
import CardItem from "../../commons/BloqueA/cardItem";
import Link from "next/link";

const BloqueA = ({ data }) => {
  console.log(data);
  const { notesArr } = data;
  return (
    <Box>
      {notesArr ? (
        <Container
          marginTop="40px"
          display="flex"
          ml="14%"
          flexDir="column"
          maxW="50%"
          border="1px"
          borderRadius="lg"
          borderColor=" #f0f0f0"
          height="auto"
          position="relative"
        >
          {data.category ? (
            <Link href={`/${data.category.url}`}>
              <Box
                display="flex"
                paddingTop="30px"
                paddingBottom="10px"
                ml="4%"
                alignItems="end"
              >
                <Img
                  mr="10px"
                  width="41"
                  height="49"
                  maxW="100%"
                  color="rgb(237, 162, 47)"
                  src={data.category.icon_image}
                />
                <Text
                  fontSize="2xl"
                  height="32px"
                  fontWeight="400"
                  textTransform="uppercase"
                  color={data.category.color}
                >
                  {data.category.name}
                </Text>
              </Box>
            </Link>
          ) : (
            <Link href={`/${data.urlCategory}/${data.urlSubCategory}`}>
              <Box
                display="flex"
                paddingTop="30px"
                paddingBottom="10px"
                ml="4%"
                alignItems="end"
              >
                <Img
                  mr="10px"
                  width="41"
                  height="49"
                  maxW="100%"
                  color="rgb(237, 162, 47)"
                />
                <Text
                  fontSize="2xl"
                  height="32px"
                  fontWeight="400"
                  textTransform="uppercase"
                >
                  {notesArr[0].subCategory.name}
                </Text>
              </Box>
            </Link>
          )}
          <Box display="flex" flexDir="row" mt="40px">
            <Box width="100%" height="50%" maxH="50%">
              <picture position="absolute" display="flex">
                <Image src={notesArr[0].field_img_primary} />
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
                <Link
                  href={`/${data.urlCategory}/${notesArr[0].subCategory.url}/${notesArr[0].url}`}
                >
                  <Text fontSize="5xl" color="white" as="b">
                    {notesArr[0].field_title_pre}
                  </Text>
                  <Text fontSize="4xl" color="white">
                    {notesArr[0].field_title}
                  </Text>
                </Link>
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
      ) : null}
    </Box>
  );
};

export default BloqueA;
