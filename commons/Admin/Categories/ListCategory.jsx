import { Box, Button, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const ListCategory = ({ category }) => {
  return (
    <Box display="flex" flexDirection="row" minW="100vh">
      <ListItem width="40%" margin="15px 0 15px 0">
        {category.name}
      </ListItem>
      <Box marginLeft="40px" display="flex" alignItems="center">
        <Link href={`/admin/EditCategory/${category.url}`}>
          <Button colorScheme="blue">EDITAR</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ListCategory;
