import {
  Flex,
  Spacer,
  Center,
  Text,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import axios from "axios";
import Link from "next/link";
import CollapseComponent from "./Collapse";
import SearchButton from "./SearchButton";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

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
    <Box
      width="100vw"
      bgImage={{ sm: "url('/assets/trama.svg')" }}
      bgSize="cover"
    >
      {categories ? (
        <Box
          position="fixed"
          top={{ sm: "50px", md: "0" }}
          background="white"
          zIndex={10}
          boxShadow="inner"
        >
          <Flex color="black" width="100vw" justifyContent="center">
            <Center
              w="170px"
              h="45px"
              marginTop="15px"
              display={{ sm: "none" }}
            >
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
              h="55px"
              size="150px"
              marginTop="15px"
              justifyContent={{ sm: "start", md: "center" }}
              alignItems="center"
              position="absolute"
            >
              <Button
                display={{ sm: "flex", md: "none" }}
                onClick={onOpen}
                background="white"
                _hover={{ color: "pink" }}
              >
                <HamburgerIcon w={6} h={6} />
              </Button>
              <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader
                    borderBottomWidth="1px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Link href="/">
                      <Image
                        alt="wow-logo"
                        src="/assets/wow.png"
                        width="127"
                        height="30"
                      />
                    </Link>
                    <Button>
                      <CloseIcon onClick={onClose} />
                    </Button>
                  </DrawerHeader>
                  <SearchButton />
                  <DrawerBody>
                    <Flex flexDirection="column">
                      {categories.map((category, i) => {
                        return (
                          <Link href={`/${category.url}`} key={i}>
                            {category.name}
                          </Link>
                        );
                      })}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>

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
            <Center w="300" h="75px" display={{ sm: "none", md: "flex" }}>
              <SearchButton />
            </Center>
          </Flex>
          <Box pos="absolute" display="block" width="100vw">
            <Flex
              boxSizing="border-box"
              justifyContent="center"
              width="100vw"
              border="1px solid rgba(188, 188, 188, 0.5)"
              bgColor="white"
            >
              <Flex
                p="10px 0"
                justifyContent="space-between"
                width="100vw"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                display={{ sm: "none", md: "flex" }}
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
