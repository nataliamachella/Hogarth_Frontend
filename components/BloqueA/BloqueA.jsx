import React from "react";
import {
  ChakraProvider,
  Container,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const BloqueA = () => {
  return (
    <ChakraProvider>
      <Container
        display="flex"
        background="orange"
        flexDir="column"
        maxW="-moz-fit-content"
      >
        <Link>
          <Text
            fontSize="50px"
            _hover={{
              color: "purple",
            }}
          >
            Actualidad
          </Text>
        </Link>
        <Image src="/assets/oscar.webp" />
        <Container display="flex" flexDir="row" justifyContent="space-around">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Container>
      </Container>
    </ChakraProvider>
  );
};

export default BloqueA;

{
  /* <Box width="70%" background="yellow" objectFit="cover">
<Image src="/assets/oscar.webp" boxSize="100%" objectFit="cover" />
  <Text color="red" position={"absolute"} >HOLA COMO ESTAN TODOS</Text>
</Box>
<Box
  width="30%"
  background="orange"
  display="flex"
  flexDirection="column"
>
  <Box background="blue" h="33%">
    <Image src="/assets/oscar.webp" boxSize="100%" objectFit="cover" />
  </Box>
  <Box background="red" h="33%">
    <Image src="/assets/oscar.webp" boxSize="100%" objectFit="cover" />
  </Box>
  <Box background="green" h="34%">
    <Image src="/assets/oscar.webp" boxSize="100%" objectFit="cover" />
  </Box>
</Box> */
}
