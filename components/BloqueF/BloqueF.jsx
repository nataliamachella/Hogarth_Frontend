import {
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  SimpleGrid,
  Box,
  Img,
} from "@chakra-ui/react";
import Link from "next/link";
import CardItem from "../../commons/BloqueF/cardItem";

const BloqueF = ({ data }) => {
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
                  color={data.category.color}
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
          ) : null}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="40px"
          >
            {notesArr ? (
              <Card width="100%" variant="unstyled">
                <CardBody>
                  <Image src={notesArr[0]?.field_img_primary} />
                  <Stack mt="6" spacing="3" alignItems="center">
                    <Link
                      href={`/${data.urlCategory}/${notesArr[0].subCategory.url}/${notesArr[0].url}`}
                    >
                      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                        {notesArr[0]?.field_title_pre}
                      </Heading>
                      <Text fontSize={{ base: "lg", lg: "xl" }}>
                        {notesArr[0]?.field_title}
                      </Text>
                    </Link>
                  </Stack>
                </CardBody>
                <Divider m="2% 0 2% 0" />
              </Card>
            ) : null}

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
          </Box>
        </Container>
      ) : null}
    </Box>
  );
};

export default BloqueF;
