import { Box } from "@chakra-ui/react";
import Link from "next/link";

const MenuCategory = ({ category, onOpen, onClose, setCategory, isOpen }) => {
  const inBox = () => {
    onOpen();
    setCategory(category);
  };

  return (
    <Box
      width="100%"
      bg="white"
      onMouseEnter={inBox}
      onMouseLeave={onClose}
      textTransform="uppercase"
      fontSize="sm"
      mt="0px"
      _hover={{
        textDecoration: "underline",
        ["text-underline-offset"]: "4px",
        fontWeight: 600,
      }}
    >
      <Link href={`/${category.url}`}>{category.name}</Link>
    </Box>
  );
};

export default MenuCategory;
