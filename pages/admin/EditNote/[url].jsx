import { useColorModeValue, Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import Form from "../../../commons/Admin/Notes/Form";

export default function UserProfileEdit({ note, subCategories, subjects }) {
  return (
    <Box
      minH={"100vh"}
      width="80%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      ml="300px"
    >
      <Form subCategories={subCategories} subjects={subjects} note={note} />
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const { url } = query;
  const res = await fetch(
    `https://wow-r0wf.onrender.com/api/notes/byURL/${url}`,
    { withCredentials: true, credentials: "include" }
  );
  const data = await res.json();

  const resSubCategories = await fetch(
    `https://wow-r0wf.onrender.com/api/subcategories`,
    { withCredentials: true, credentials: "include" }
  );
  const dataSubCategories = await resSubCategories.json();

  const resSubject = await fetch(`https://wow-r0wf.onrender.com/api/subjects`, {
    withCredentials: true,
    credentials: "include",
  });
  const dataSubject = await resSubject.json();

  return {
    props: {
      note: data,
      subCategories: dataSubCategories,
      subjects: dataSubject,
    },
  };
}
