import { Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import React from "react";
import Notas from "../../commons/Admin/Notes/Notas";

const AdminPage = ({ notes }) => {
  return (
    <Box display="flex" flexDir="row">
      <Notas notes={notes} />
    </Box>
  );
};

export default AdminPage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/api/notes");
  const data = await res.json();
  return {
    props: {
      notes: data,
    },
  };
}
