import React from "react";
import {
  Button,
  Text,
  UseDisclosureProps,
  useDisclosure,
  Image,
  Input,
  Box
} from "@chakra-ui/react";

const SearchButton = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <Box display="flex" flexDir="row-reverse">
      <Button
        {...buttonProps}
        display="flex"
        border="hidden"
        bg="white"
        _hover={{ bg: "pink" }}
        borderRadius="20px"
        mr="15px"        
      >
        <Image
          alt="search-logo"
          src="/assets/search.svg"
          width="30"
          height="30"
        />
      </Button>
      <Input mr="5px" width="250px" {...disclosureProps} placeholder="Buscar"/>

    </Box>
  );
};

export default SearchButton;
