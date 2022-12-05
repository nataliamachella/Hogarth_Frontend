import { useColorModeValue, Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";
import Form from "../../../commons/Admin/Notes/Form";

export default function UserProfileEdit({ subCategories, subjects }) {
  return (
    <Box
      minH={"100vh"}
      width="80%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      ml="300"
    >
      <Form subCategories={subCategories} subjects={subjects} />
    </Box>
  );
}

export async function getServerSideProps() {
  const resSubCategories = await fetch(
    `http://localhost:3001/api/subcategories`
  );
  const dataSubCategories = await resSubCategories.json();

  const resSubject = await fetch(`http://localhost:3001/api/subjects`);
  const dataSubject = await resSubject.json();

  return { props: { subCategories: dataSubCategories, subjects: dataSubject } };
}
