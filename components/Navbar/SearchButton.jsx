import React, { useState } from "react";
import {
  Button,
  Text,
  UseDisclosureProps,
  useDisclosure,
  Image,
  Input,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

const SearchButton = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/search",
        query: { input: input },
      });
    }
  };

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <Box display="flex" flexDir="row-reverse" onKeyPress={handleSubmit}>
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
      <Input
        mr="5px"
        width="250px"
        {...disclosureProps}
        placeholder="Buscar"
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchButton;
