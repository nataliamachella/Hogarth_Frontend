import {
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
  Container,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const MenuCategory = ({ category }) => {
  return (
    <ChakraProvider>
      <Menu>
        <MenuButton
          as={Button}
          border="hidden"
          background={"white"}
          fontFamily="sans-serif"
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
        >
          <Box textAlign={"center"}>
            {category.subCategories.map((subCategory) => (
              <MenuItem
                key={subCategory.url}
                border={"hidden"}
                bg="pink"
                marginTop={"15px"}
                fontWeight={"bold"}
                _hover={{ color: "red", textDecoration: "underline" }}
              >
                {subCategory.name}
              </MenuItem>
            ))}
          </Box>
          <Card marginTop={"20px"}>
            <CardBody>
              <Image
                alt="photo"
                src="/assets/photoFaker.jpg"
                width="190"
                height="130"
              />
              <Text>
                <h3>Lorem ipsum dolor</h3>sit amet la la la.
              </Text>
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
              <Text>
                <h3>Lorem ipsum dolor</h3>sit amet la la la.
              </Text>
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
              <Text>
                <h3>Lorem ipsum dolor</h3>sit ametla la la.
              </Text>
            </CardBody>
          </Card>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default MenuCategory;
