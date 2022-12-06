import { Box, Button, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const ListCategory = ({ data, path }) => {
  let route;
  if (path == "/admin/Subcategorias")
    route = `/admin/EditSubcategory/${data.url}`;
  if (path == "/admin/Categorias") route = `/admin/EditCategory/${data.url}`;
  return (
    <Box display="flex" flexDirection="row" minW="100vh">
      <ListItem width="40%" margin="15px 0 15px 0">
        {data.name}
      </ListItem>
      <Box marginLeft="40px" display="flex" alignItems="center">
        <Link href={`${route}`}>
          <Button colorScheme="blue">EDITAR</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ListCategory;
