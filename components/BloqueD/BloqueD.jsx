import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardBody,
  Link,
  Image,
  Text,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { AddIcon } from "@chakra-ui/icons";
import CardItem from "../../commons/BloqueD/cardItem";
import {
  useDisclosure,
  getButtonProps,
  getDisclosureProps,
} from "@chakra-ui/react";

const BloqueD = ({ url }) => {
  const [notas, setNotas] = useState(null);
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  useEffect(() => {
    axios.get(`/api/notes/byCategory/${url}`).then((notas) => {
      console.log(notas.data);
    });
  }, [url]);

  return (
    <Box bg="#f7f7f7" h="874px">
      <Heading
        as="h3"
        fontSize="26px"
        color="#1A202C"
        fontFamily="sans-serif"
        ml="250px"
      >
        SEGUIR LEYENDO (CATEGORIA)
      </Heading>
      <Grid templateColumns="repeat(3, 2fr)" m="30px 250px">
        {/* {notas.map((nota, i) => {
            return <CardItem nota={nota} key={i} />;
          })} */}
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
      </Grid>
      <Center>
        <Text mr="20px" as="b">
          Cargar Más
        </Text>
        <Button {...buttonProps}>{<AddIcon />}</Button>
      </Center>

      <Grid
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
      </Grid>
    </Box>
  );
};

export default BloqueD;
