import { Box } from "@chakra-ui/react";
import React from "react";

import ContentAdmin from "./Notas.jsx";

const AdminPage = () => {
  return (
    <Box display="flex" flexDir="row">
      <ContentAdmin />
    </Box>
  );
};

export default AdminPage;
