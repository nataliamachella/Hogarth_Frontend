import {
  Flex,
  Spacer,
  Center,
  Button,
  ChakraProvider,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import axios from "axios";

const Navbar = () => {
  const [categories, setCategories] = useState(null);

  const fetchCategories = () => {
    axios
      .get("/api/categories")
      .then((categories) => setCategories(categories.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ChakraProvider>
      {categories ? (
        <Container position="fixed" top="0" maxW="100%" background="white">
          <Flex color="black">
            <Center w="170px" h="45px" marginTop="15px">
              <Image
                alt="instagram-logo"
                src="/assets/instagram-logo.svg"
                width="30"
                height="30"
              />
              <Image
                alt="youtube-logo"
                src="/assets/youtube-logo.png"
                width="30"
                height="30"
              />
            </Center>
            <Spacer />
            <Center bg="blue" h="40px" size="150px" marginTop="15px">
              <Image
                alt="wow-logo"
                src="/assets/wow.png"
                width="250"
                height="50"
              />
            </Center>
            <Spacer />
            <Center w="170px" h="75px">
              <Button
                border="hidden"
                bg="white"
                _hover={{ bg: "pink" }}
                borderRadius="20px"
              >
                <Image
                  alt="search-logo"
                  src="/assets/search.svg"
                  width="30"
                  height="30"
                />
              </Button>
            </Center>
          </Flex>
          <Flex
            color="black"
            justifyContent={"center"}
            border="1px solid #f0f0f0"
            onChange={fetchCategories}
          >
            {categories.map((category) => {
              return (
                <Center w="170px" h="45px" key={category.id}>
                  <Link textDecoration={"none"}>
                    <MenuCategory category={category} />
                  </Link>
                </Center>
              );
            })}
          </Flex>
        </Container>
      ) : (
        <Text>Loading</Text>
      )}
    </ChakraProvider>
  );
};

export default Navbar;
