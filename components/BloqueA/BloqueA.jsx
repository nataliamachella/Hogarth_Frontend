import React from "react";
import { Box, Flex, Image,Text } from "@chakra-ui/react";

const BloqueA = () => {
  return (
    <Box display="flex" h="60vh" margin="0 35% 0 15%">
      <Box width="70%" background="yellow" objectFit="cover">
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
      </Box>
    </Box>
  );
};

export default BloqueA;
