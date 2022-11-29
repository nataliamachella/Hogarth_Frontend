import { Box } from "@chakra-ui/react";
import Link from "next/link";

const MenuCategory = ({ category, onOpen, onClose, setCategory, isOpen }) => {
  const inBox = () => {
    onOpen();
    setCategory(category);
  };

  return (
    <Box width="100%" bg="white">
      <Box onMouseEnter={inBox} onMouseLeave={onClose}>
        <Link href={`/${category.url}`}>{category.name}</Link>
      </Box>
    </Box>
  );
};

export default MenuCategory;
