import { Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import Notas from "../../commons/Admin/Notes/Notas";

const AdminPage = () => {
  return (
    <Box display="flex" flexDir="row">
      <Notas />
    </Box>
  );
};

export default AdminPage;

export async function getServerSideProps() {
  const res = await fetch("https://wow-r0wf.onrender.com/api/notes", {
    withCredentials: true,
    credentials: "include",
  });
  const data = await res.json();
  return {
    props: {
      notes: data,
    },
  };
}
