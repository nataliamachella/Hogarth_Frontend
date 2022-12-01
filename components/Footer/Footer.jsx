import React from "react";
import { Flex, Box, Center, Text, Divider, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
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
    <Flex h="370px" zIndex="-1" alignItems="center" justifyContent="center">
      <Flex h="300px" w="1250px" padding="35px auto" flexWrap="wrap">
        <Box maxW="md" margin="0px 40px" h="193px" w="158px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjG76TkFsEFWxICkjW5BVijVD82Wz8hZTBDkW7diyleNt_wm6ZX5Cs9CLEWWPIAnJdDQ&usqp=CAU"
            alt="revista"
          />
        </Box>
        <Box maxW="md" bg="white" margin="20px 35px" w="356px" h="193px">
          <img src="/assets/wow.png" alt="logo-wow" h="50px" w="200px" />

          <Center justifyContent="space-around">
            <img
              src="/assets/youtube-logo.png"
              alt="logo-youtube"
              h="30px"
              width="35px"
            />

            <img src="/assets/mail.png" alt="logo-mail" h="30px" width="35px" />

            <img
              src="/assets/instagram-logo.svg"
              alt="logo-instagram"
              h="35px"
              width="35px"
            />
          </Center>
        </Box>

        <Box
          bg="white"
          maxW="md"
          margin="20px 20px"
          padding="40px 30px 20px 0"
          w="530px"
          h="193px"
          display="flex"
        >
          <Box marginRight="20px">
            <Box marginBottom="10px">
              <Text fontSize="15px" as="b">
                NOSOTROS
              </Text>
            </Box>

            <Box>
              <Text fontSize="14px">Manifiesto WOW!</Text>

              <Text fontSize="14px">Contanos tu Historia</Text>
            </Box>
          </Box>

          <Box marginRight="20px">
            <Box marginBottom="10px">
              <Text fontSize="15px" as="b">
                DESCUBRÍ
              </Text>
            </Box>
            {categories ? (
              categories.map((category, i) => {
                return (
                  <Text key={i} fontSize="14px">
                    {category.name}
                  </Text>
                );
              })
            ) : (
              <Text>Loading</Text>
            )}
          </Box>
        </Box>
        <Divider />
        <Flex w="1250px" h="40px">
          <Stack
            direction="row"
            h="20px"
            p={4}
            marginLeft="250px"
            marginRight="40px"
          >
            <Divider orientation="vertical" />

            <Text fontSize="11px">Términos y Condiciones </Text>
            <Divider orientation="vertical" />
            <Text fontSize="11px">¿Cómo anunciar?</Text>
            <Divider orientation="vertical" />
            <Text fontSize="11px">Preguntas Frecuentes</Text>
          </Stack>
          <Stack direction="row" h="20px" p={4} marginRight="40px">
            <Divider orientation="vertical" />

            <Text fontSize="11px">Copyright 2022 SA LA NACIÓN </Text>
            <Divider orientation="vertical" />
            <Text fontSize="11px">Todos los derechos reservados.</Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
