import {
  Flex,
  Spacer,
  Center,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import axios from "axios";
import Link from "next/link";
import CollapseComponent from "./Collapse";
import SearchButton from "./SearchButton";

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
        <Box position="fixed" top="0" background="white" zIndex={10}>
          <Flex color="black" width="100vw" justifyContent="center">
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
            <Box
              display="flex"
              bg="blue"
              h="55px"
              size="150px"
              marginTop="15px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
            >
              <Link href="/">
                <Image
                  alt="wow-logo"
                  src="/assets/wow.png"
                  width="250"
                  height="50"
                />
              </Link>
            </Box>
            <Spacer />
            <Center w="300" h="75px">
              <SearchButton />
            </Center>
          </Flex>
          <Box pos="absolute" display="block" width="100vw">
            <Flex
              boxSizing="border-box"
              justifyContent="center"
              width="100%"
              border="1px solid rgba(188, 188, 188, 0.5)"
              bgColor="white"
            >
              <Flex
                pe="0px"
                ps="0px"
                justifyContent="space-between"
                width="100%"
                maxWidth="1200px"
                pt="10px"
                pb="10px"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
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
              </Flex>
            </Flex>
            {category ? (
              <CollapseComponent
                onOpen={onOpen}
                onClose={onClose}
                isOpen={isOpen}
                category={category}
              />
            ) : null}
          </Box>
        </Box>
      ) : (
        <Text>Loading</Text>
      )}
    </Box>
  );
};

export default Navbar;
