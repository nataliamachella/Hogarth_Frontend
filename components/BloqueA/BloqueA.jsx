import React from "react";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import MainNote from "./MainNote";


const BloqueA = () => {


  return (
    <Flex h="60vh" margin="0 35% 0 15%">
        <Box width="70%" background="yellow">
            <MainNote/>
        </Box>
        <Box width="30%" background="orange" display="flex" flexDirection="column" >
            <Box background="blue" h="33%"></Box>
            <Box background="red" h="33%"></Box>
            <Box background="green" h="34%"></Box>
        </Box>
    </Flex>
  );
};

export default BloqueA;
