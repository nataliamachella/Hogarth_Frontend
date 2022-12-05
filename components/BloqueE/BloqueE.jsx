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
} from "@chakra-ui/react";
import CardItem from "../../commons/BloqueB/carditem";

const BloqueE = ({ data }) => {
  const { notesArr } = data;

  return (
    <Box>
      {notesArr ? (
        <Container
          marginTop="40px"
          display="flex"
          flexDir="column"
          maxW="67%"
          border="1px"
          borderRadius="lg"
          borderColor=" #f0f0f0"
          height="auto"
        >
          <Text
            fontSize="50px"
            _hover={{
              color: "purple",
            }}
          >
            {data.category ? <Link href={`/${data.category.url}`}>{data.category.name}</Link> : null}
          </Text>
          <Box display="flex" flexDirection="column" alignItems="center">
            {notesArr ? (
              <Card width="80%">
                <CardBody>
                  <Image
                    src={notesArr[0].field_img_primary}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3" alignItems="center">
                    <Link href={`notes/byURL/${notas[0].url}`}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      {notesArr[0].field_title_pre}
                    </Heading>
                    <Text fontSize={{ base: "lg", lg: "xl" }}>
                      {notesArr[0].field_title}
                    </Text>
                    </Link>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            ) : null}

            <SimpleGrid
              display="flex"
              flexDir="row"
              justifyContent="space-around"
              margin="15px 0 15px 0"
              width="80%"
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

export default BloqueE;
