import {
  Flex,
  Spacer,
  Center,
  Button,
  Container,
  Text,
  Box,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import axios from "axios";
import Link from "next/link";
import CollapseComponent from "./Collapse";

const Navbar = () => {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchCategories = () => {
    axios
      .get("/api/categories")
      .then((categories) => setCategories(categories.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Box width="100vw">
      {categories ? (
        <Box
          position="fixed"
          top="0"
          maxW="100%"
          background="white"
          zIndex={10}
        >
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
              <Link href="/">
                <Image
                  alt="wow-logo"
                  src="/assets/wow.png"
                  width="250"
                  height="50"
                />
              </Link>
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
          <Box pos="absolute" display="block" width="100vw">
            <Grid templateColumns={`repeat(${categories.length}, 1fr)`}>
              {categories.map((category, i) => {
                return (
                  <MenuCategory
                    category={category}
                    key={i}
                    onOpen={onOpen}
                    onClose={onClose}
                    setCategory={setCategory}
                    isOpen={isOpen}
                  />
                );
              })}
            </Grid>
            <CollapseComponent
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
              category={category}
            />
          </Box>
        </Box>
      ) : (
        <Text>Loading</Text>
      )}
    </Box>
  );
};

export default Navbar;
