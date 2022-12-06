import { Box, Grid, Link, Text, Container, Img } from "@chakra-ui/react";
import CardItem from "../../commons/BloqueD/cardItem";
import { useDisclosure } from "@chakra-ui/react";

const BloqueD = ({ data }) => {
  const { notesArr } = data;

  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <Box>
      <Container
        marginTop="40px"
        display="flex"
        ml="14%"
        flexDir="column"
        maxW="50%"
        border="1px"
        borderRadius="lg"
        borderColor=" #f0f0f0"
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
        ) : null}
        <Grid display="flex" flexDir="row" flexFlow="wrap">
          {notesArr
            ? notesArr.map((nota, i) => {
                return <CardItem nota={nota} key={i} />;
              })
            : null}
        </Grid>

        {/* <Center>
          <Text mr="20px" as="b">
            Cargar Más
          </Text>
          <Button {...buttonProps}>{<AddIcon />}</Button>
        </Center> */}

        {/* <Grid
          templateColumns="repeat(3, 2fr)"
          m="30px 250px"
          {...disclosureProps}
        >
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
          <Card h="340px" w="300px" mt="10px">
            <Image src="/assets/photoFaker.jpg" h="200px" w="100%" />
            <CardBody>
              <Link href="/">
                <Text>
                  <strong>Soy el título </strong>
                  Soy el párrafo
                </Text>
              </Link>
            </CardBody>
          </Card>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default BloqueD;
