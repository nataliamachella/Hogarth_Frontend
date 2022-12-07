import { Box, Text, Grid, Center } from "@chakra-ui/react";
import CreateButtons from "../../../components/Admin/CreateButtons";
import Pagination from "../../Pagination";
import CardNotes from "../CardNotes";
import { useEffect, useState } from "react";
import axios from "axios";

const Notas = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/notes/findForPagination/${current}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [current]);

  console.log(data);
  return (
    <Box width="99%" height="100%" ml="300px">
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
      {data ? (
        <Box>
          <Box h="170px" w="70%" marginTop="40px">
            <Grid templateColumns="repeat( 1fr)" gap={6}>
              {data ? (
                data.notes.map((note, i) => <CardNotes note={note} key={i} />)
              ) : (
                <Text>Loading</Text>
              )}
            </Grid>
            <Center mt={50}>
              {data.totalPages > 1 ? (
                <Pagination
                  setCurrent={setCurrent}
                  totalPages={data.totalPages}
                  current={current}
                />
              ) : null}
            </Center>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Notas;
