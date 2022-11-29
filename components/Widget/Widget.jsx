import React from "react";
import { Box, Grid, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Widget = () => {
  return (
    <Box
      as={motion.div}
      height="755px"
      width="100vp"
      p="25px 0px 25px"
      bg="#FDEBEB"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Grid
        as={motion.div}
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        height="700px"
        width="1070px">
        <GridItem rowStart={2} rowEnd={5}>
          <Heading size="lg" color="#B9459E">
            ¿Cómo te sentís en este momento?
          </Heading>
          <Text size="md" color="#757575" m="10px 0px 10px">
            Te recomendamos una nota adecuada para tu mood de hoy.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={8}
          colSpan={2}
          display="flex"
          alignItems="center"
          justifyContent="center">
            <Text position="absolute" fontSize="6xl">😍​</Text>
          <Box
            height="75%"
            width="75%"
            borderWidth="40px"
            borderColor="#FDC6C6"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box
              height="35%"
              width="35%"
              border="2px"
              borderStyle="dashed"
              borderColor="#E9B6B6"
              borderRadius="50%"
              bg="radial-gradient(#FDEBEB, #FDC6C6)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              //   flexDirection="column"
            >
              <Text color="#FDC6C6" fontSize="6xl">?</Text>
              {/* <Box
                h="100%"
                w="100%"
                marginTop="15%"
                paddingRight="5%"
                display="flex"
                alignItems="center"
                justifyContent="space-evenly">
                <Box
                marginLeft="5%"
                  h="25%"
                  w="12%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="50%"
                />
                <Box
                  h="25%"
                  w="12%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="50%"
                />
              </Box>
              <Box
                h="50%"
                w="100%"
                marginBottom="10%"
                display="flex"
                alignItems="start"
                justifyContent="center">
                <Box
                  h="25%"
                  w="50%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="25%"/>
              </Box> */}
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={4} colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
};

export default Widget;
