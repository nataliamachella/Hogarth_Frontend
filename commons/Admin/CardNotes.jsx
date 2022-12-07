import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/router";

const CardNotes = ({ note }) => {
  const router = useRouter();
  const removeBlock = () => {
    axios
      .delete(`/api/notes/delete/${note.id}`)
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push(`/admin/`);
  };
  return (
    <Box display="flex" flexDirection="row" minW="100vh">
      <Box minW={"100%"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="</Link>hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={note.field_img_primary}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md" fontSize="16px">
                <span>{note.field_title_pre}</span>
                {note.field_title}
              </Heading>
              <Divider
                borderColor="#E32B6C"
                borderStyle="solid"
                width="24px"
                mt={10}
              />
            </CardBody>
            <CardFooter>
              <Heading as="h6" fontSize="sm" fontWeight="normal">
                por <span>{note.author}</span>
              </Heading>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
      <Box />
      <Box marginLeft="40px" display="flex" alignItems="center">
        <Link href={`/admin/EditNote/${note.url}`}>
          <Button colorScheme="blue">EDITAR</Button>
        </Link>
      </Box>
      <Box marginLeft="40px" display="flex" alignItems="center">
        <IconButton
          aria-label="Search database"
          icon={<FiTrash2 />}
          onClick={removeBlock}
        />
      </Box>
    </Box>
  );
};

export default CardNotes;
