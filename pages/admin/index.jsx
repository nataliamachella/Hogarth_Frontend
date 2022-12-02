import { Box } from "@chakra-ui/react";
import React from "react";
import Notas from "./Notas.jsx";


const AdminPage = () => {
  return (
    <Box display="flex" flexDir="row">
      <Notas />
    </Box>
  );
};

export default AdminPage;
