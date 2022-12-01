import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Grid,
  Card,
  Stack,
  CardBody,
  Heading,
  Divider,
  CardFooter,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import CreateButtons from "../../components/Admin/CreateButtons";

const Notas = () => {
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    axios.get("/api/notes").then((notes) => setNotas(notes.data));
  },[]);

  return (
    <Box width="100%" height="100%">
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>NOTAS</Text>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <CreateButtons />
      </Box>
      <Box>
        <Box h="170px" w="70%" marginTop="40px">
          <Grid templateColumns="repeat( 1fr)" gap={6}>
            {notas ? (
              notas.map((note, i) => (
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
                        key={i}
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
                </Box>
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Notas;
