import {
  useDisclosure,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Box,
  Card,
  Text,
  CardBody,
  ChakraProvider,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const MenuCategory = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={Button}
          border="hidden"
          background={"white"}
          fontFamily="sans-serif"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {category.name}
        </MenuButton>
        <MenuList
          display={"flex"}
          w="1500px"
          h="auto"
          bg="pink"
          marginTop={"-1"}
          justifyContent="space-around"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <Box textAlign={"center"}>
            {category.subCategories.map((subCategory, i) => {
              return (
                <Link href={`/${category.url}/${subCategory.url}`} key={i}>
                  <MenuItem
                    key={i}
                    border={"hidden"}
                    bg="pink"
                    marginTop={"15px"}
                    fontWeight={"bold"}
                    _hover={{ color: "red", textDecoration: "underline" }}
                  >
                    {subCategory.name}
                  </MenuItem>
                </Link>
              );
            })}
          </Box>
          <Card marginTop={"20px"}>
            <CardBody>
              <Image
                alt="photo"
                src="/assets/photoFaker.jpg"
                width="190"
                height="130"
              />
              <Text>Lorem ipsum dolor sit amet la la la.</Text>
            </CardBody>
          </Card>
          <Card marginTop={"20px"}>
            <CardBody>
              <Image
                alt="photo"
                src="/assets/photoFaker.jpg"
                width="190"
                height="130"
              />
              <Text>Lorem ipsum dolor sit amet la la la.</Text>
            </CardBody>
          </Card>
          <Card marginTop={"20px"}>
            <CardBody>
              <Image
                alt="photo"
                src="/assets/photoFaker.jpg"
                width="190"
                height="130"
              />
              <Text>Lorem ipsum dolor sit ametla la la.</Text>
            </CardBody>
          </Card>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default MenuCategory;
